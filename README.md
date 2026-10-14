# Automation Testing Assessment

## Project Overview
This project contains SauceDemo UI automation tests using Playwright and API automation tests using Postman.

## Tools and Technologies
- JavaScript
- Playwright
- Postman
- Newman

## Prerequisites
- Node.js and npm installed
- Git installed
- Playwright installed in the project
- Postman installed (for viewing or editing the collection)

## Project Setup
Clone the repository and open the project folder in the terminal.

Install dependencies:

```bash
npm install
```

## Run UI Tests

Run separately  test:

```bash
npx playwright test tests/q1-locked-out.spec.js --headed
npx playwright test tests/q2-standard-user.spec.js --headed
npx playwright test tests/q3-glitch-user.spec.js --headed
```

Run all together  UI tests:

```bash
npx playwright test –-headed
```

## View Playwright HTML Report

```bash
npx playwright show-report
```

## Run API Tests

Run the Postman collection using Newman:

```bash
newman run api/API-Automation.postman_collection.json
```

## Test Scenarios
- Login error validation
- Product selection and checkout
- Product sorting and checkout
- API login and token capture
- GET, PUT, and PATCH request validation
- Negative API testing

## Newman test generate report
  install npm i newman-reporter-htmlextra
  run  newman run API_Automation.postman_collection.json -r htmlextra
  //report collected of newman run test result in API Automation folder
## Author
Mst Sima Khatun