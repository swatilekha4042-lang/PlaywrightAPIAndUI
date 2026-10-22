# Playwright API & UI Automation

This project contains a Playwright-based automation suite for UI, API, and session-state validation. The main application under test is SauceDemo, with additional API checks for Jira and a public REST API endpoint.

## Overview

- UI automation for login, checkout, and cart workflows
- Data-driven tests from CSV and JSON files
- Browser context and multi-tab validation
- Session storage reuse via Playwright `storageState`
- API testing using `request` fixtures for GET, POST, PUT, and PATCH calls
- Visual regression checks and HTML/Allure reporting

## Tech Stack

- Playwright Test
- JavaScript (ES modules)
- Page Object Model
- Custom fixtures
- CSV and JSON test data
- Allure + Playwright HTML reporting

## Current Project Structure

```text
.
├── Fixtures/                     # Custom Playwright fixtures
├── PageObjects/                 # SauceDemo page object classes
├── TestData/                    # CSV/JSON test data and saved auth state
├── Testcases/                   # Playwright test specs
│   ├── APITestcases/            # API-specific test files
│   └── ...
├── Utils/                       # Helper utilities, including CSV reader
├── allure-results/              # Allure execution results
├── allure-report/               # Generated Allure report output
├── playwright-report/          # Generated Playwright HTML report
├── eslint.config.js            # ESLint configuration
├── package.json                # Scripts and dependencies
├── playwright.config.js        # Playwright project configuration
├── README.md                   # Project documentation
└── Testcases/VisualTesting.spec.js-snapshots/  # Visual baseline snapshots
```

## Current Playwright Configuration

The project is configured with a small multi-project setup in `playwright.config.js`:

- `setup` project for auth/session setup
- `login session storage` project that depends on the setup project
- `chromium` project for the main browser suite
- HTML reporter enabled
- Allure reporter configured to write into `allure-results`
- Screenshot and trace capture retained on failure

## Test Coverage

The suite currently covers:

- SauceDemo login using CSV and JSON data
- End-to-end checkout flow
- Cart count persistence across tabs
- Multi-user scenarios in separate browser contexts
- Saved login session validation with `storageState`
- REST API GET, POST, PUT, and PATCH checks
- Jira dashboard API test using Basic Auth
- Visual checking with screenshot comparisons

## Prerequisites

- Node.js 18+ recommended
- A working browser installation for Playwright
- Optional: Allure CLI for generating and opening reports

## Setup

```bash
npm install
npx playwright install --with-deps
```

If you are using a Chrome channel in the Playwright config, make sure Chrome is available on your machine.

## Run Tests

Run the complete suite:

```bash
npx playwright test
```

Run a specific file or project:

```bash
npx playwright test Testcases/LoginTests.spec.js
npx playwright test Testcases/APITestcases.spec.js
npx playwright test Testcases/JiraTestcases.spec.js
npx playwright test Testcases/VisualTesting.spec.js
npx playwright test --project=chromium
npx playwright test --project="login session storage"
```

## NPM Scripts

```bash
npm run lint
npm run lint:fix
npm run runner2
npm run clean-allure
npm run api-allure
npm run ui-allure
npm run jira-allure
npm run allure:generate
```

## Environment Variables

Some tests require runtime environment variables:

```bash
export JIRA_EMAIL="your-email@example.com"
export JIRA_API_TOKEN="your-api-token"
export API_KEY="your-api-key"
```

- `JIRA_EMAIL` and `JIRA_API_TOKEN` are required for Jira dashboard API validation.
- `API_KEY` is used by authenticated API tests when applicable.

## Reports

Open the built-in HTML report:

```bash
npx playwright show-report
```

Generate and open the Allure report:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

## Notes

This repo is a practical Playwright automation project for learning and validating browser and API testing patterns, especially around page-object-based UI flows and data-driven QA scenarios.
