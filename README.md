# Playwright Basics

Playwright practice project for UI, API, visual, fixture, and storage-state testing.

## Stack

- Playwright Test
- JavaScript ES modules
- Page Object Model
- Custom fixtures
- CSV and JSON test data
- Allure and Playwright HTML reports

## Structure

```text
Fixtures/                         Custom Playwright fixtures
PageObjects/                      SauceDemo page objects
TestData/                         Login data and saved auth state
Testcases/                        Playwright specs
Testcases/APITestcases/           Nested API specs, including authenticated API tests
Utils/                            CSV reader utility
```

## Test Coverage

- SauceDemo login from CSV and JSON data
- SauceDemo end-to-end checkout flow
- Cart persistence across browser tabs
- Multiple users in separate browser contexts
- Saved login session with `storageState`
- REST API GET, POST, PUT, and PATCH tests
- Authenticated REST API POST, PUT, PATCH, and DELETE tests
- Jira dashboard API test
- Visual screenshot comparison tests

## Setup

```bash
npm install
npx playwright install
```

Allure report commands require the Allure CLI to be installed separately.

## Run Tests

```bash
npx playwright test
npx playwright test Testcases/LoginTests.spec.js
npx playwright test Testcases/APITestcases.spec.js
npx playwright test Testcases/APITestcases/AuthenticatedAPI.spec.js
npx playwright test Testcases/VisualTesting.spec.js
npx playwright test Testcases/JiraTestcases.spec.js
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
```

## Environment Variables

Required for Jira API tests:

```bash
export JIRA_EMAIL="your-email@example.com"
export JIRA_API_TOKEN="your-api-token"
```

Required for authenticated API fixture tests:

```bash
export API_KEY="your-api-key"
```

## Reports

```bash
npx playwright show-report
allure generate allure-results --clean -o allure-report
allure open allure-report
```
