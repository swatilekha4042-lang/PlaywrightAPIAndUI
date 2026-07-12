// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  timeout: 20_000,
  expect: { timeout: 10_000, },
  testDir: './Testcases',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright', { resultsDir: 'allure-results' }]
  ]
  ,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    headless: !!process.env.CI
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: /AuthSetUp\.spec\.js/,
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: !!process.env.CI,
      },
    },
    {
      // Run it like npx playwright test --project="login session storage"
      name: 'login session storage',
      testMatch: /LoginSessionStorage\.spec\.js/,
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: !!process.env.CI,
        storageState: 'TestData/auth.json',
      },
    },

    {
      name: 'chromium',
      testIgnore: /LoginSessionStorage\.spec\.js/,
      use: { ...devices['Desktop Chrome'], viewport: { width: 1492, height: 731 }, headless: !!process.env.CI },
    },
    // {
    //   name: 'google-chrome',
    //   use: {
    //     testIgnore: /LoginSessionStorage\.spec\.js/,
    //     ...devices['Desktop Chrome'],
    //     channel: 'chrome',
    //   },
    // },
  ],
});

