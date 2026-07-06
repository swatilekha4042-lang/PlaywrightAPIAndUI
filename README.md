# Playwright Basics

This project is a Playwright learning and practice repository covering UI automation, API testing, visual testing, fixtures, page objects, storage state, and reporting.

The configured test suite lives in `Testcases/`.

## Tech Stack

- Playwright Test
- JavaScript ES modules
- Page Object Model
- Custom fixtures
- CSV and JSON test data
- Playwright APIRequestContext
- Visual snapshots
- HTML and Allure reports

## Project Structure

```text
.
├── Fixtures/              # Custom Playwright fixtures
├── PageObjects/           # Page Object Model classes
├── TestData/              # CSV, JSON, and auth storage state data
├── Testcases/             # Main Playwright suite configured in playwright.config.js
├── Utils/                 # Utility helpers such as CSV reader
├── playwright.config.js   # Playwright configuration
└── package.json           # NPM scripts and dependencies
```

## Scenarios Covered

### UI Automation - SauceDemo

- Login using credentials from a CSV file.
- Login using credentials from a JSON file.
- Complete end-to-end shopping flow:
  - Open SauceDemo.
  - Login.
  - Add an item to cart.
  - Checkout.
  - Fill checkout information.
  - Finish order.
  - Logout.
- Verify cart count persistence across multiple tabs.
- Run multiple users in separate browser contexts to validate isolated sessions.

### Authentication and Session Storage

- Login once and save authenticated browser state to `TestData/auth.json`.
- Reuse saved `storageState` in dependent tests.
- Use a setup project with project dependencies for authenticated scenarios.

### API Testing

- Send GET requests using Playwright's `request` fixture.
- Create records with POST requests.
- Update records with PUT requests.
- Validate response status codes and `response.ok()`.
- Parse and inspect JSON response bodies.
- Call Jira REST API dashboards endpoint using Basic Auth from environment variables.

### Visual Testing

- Capture and compare full-page screenshots.
- Capture and compare element screenshots.
- Use screenshot masking for dynamic UI areas.
- Use `maxDiffPixels` to allow controlled visual differences.
- Store visual baselines under snapshot folders.

### Fixtures and Test Data

- Extend Playwright's base test with custom fixtures.
- Provide a shared `PageManager` fixture.
- Create page managers for newly opened tabs.
- Provide checkout data through a fixture.
- Read external CSV data with a reusable utility.
- Import JSON test data directly into specs.

### Reporting and Debugging

- Generate Playwright HTML reports.
- Generate Allure reports with `allure-playwright`.
- Collect traces using `trace: 'on'`.
- Run tests in headed mode locally and headless mode in CI.

## Important Playwright Concepts Covered

- `test`, `expect`, and built-in fixtures such as `page`, `browser`, `context`, and `request`.
- Locators using CSS selectors and role-based selectors.
- Assertions such as `toHaveURL`, `toHaveTitle`, `toHaveText`, and `toHaveScreenshot`.
- Page Object Model for maintainable UI automation.
- Fixture extension with `base.extend()`.
- Browser contexts for session isolation.
- Multiple tabs using `context.newPage()`.
- Storage state setup and reuse.
- Project configuration, dependencies, `testMatch`, and `testIgnore`.
- API testing without a browser through Playwright's request context.
- Visual regression testing with screenshots.
- Test data driven testing from CSV and JSON files.
- Reporters and trace viewer support.

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers if needed:

```bash
npx playwright install
```

## Running Tests

Run the configured suite:

```bash
npx playwright test
```

Run a specific spec:

```bash
npx playwright test Testcases/LoginTests.spec.js
```

Run the authenticated session project:

```bash
npx playwright test --project="login session storage"
```

Run API tests:

```bash
npx playwright test Testcases/APITestcases.spec.js
```

Run visual tests:

```bash
npx playwright test Testcases/VisualTesting.spec.js
```

Open the Playwright HTML report:

```bash
npx playwright show-report
```

## NPM Scripts

```bash
npm run runner2      # Run Playwright tests
npm run api-allure   # Run API tests and open Allure report
npm run ui-allure    # Run UI login tests and open Allure report
npm run jira-allure  # Run Jira API tests and open Allure report
```

## Jira API Test Configuration

The Jira API test expects these environment variables:

```bash
export JIRA_EMAIL="your-email@example.com"
export JIRA_API_TOKEN="your-api-token"
```

Then run:

```bash
npx playwright test Testcases/JiraTestcases.spec.js
```

## Notes

- `playwright.config.js` currently sets `testDir` to `./Testcases`, so default runs execute specs from that folder.
- Visual tests depend on stored baseline screenshots. If the UI changes intentionally, update snapshots with:

```bash
npx playwright test Testcases/VisualTesting.spec.js --update-snapshots
```
