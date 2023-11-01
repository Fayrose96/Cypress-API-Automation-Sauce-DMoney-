# API Automation Testing with Cypress

This project contains automated tests for login and user creation using API automation with Cypress.

## Prerequisites

Before running the tests, ensure that you have the following software and tools installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/your-repo.git
2. cd cypress-api-automation
3. npm install

## Configaration

Before running the tests, make sure to configure the base URL of your API. This can be done by editing the `cypress.json` file.

## Configure the Base URL

 Open the `cypress.json` file and update the `baseUrl` with the URL of your API:

```json
{
  "baseUrl": "https://your-api-base-url.com"
}
   

## Running the Tests

To run the API automation tests, follow these steps:

1.Clone this repository to your local machine:
 ```shell
   git clone https://github.com/yourusername/your-repo.git

2.Navigate to the project directory:
```shell
   cd cypress-api-automation

3.Install project dependencies:
```shell
  npm install

4.Open the Cypress Test Runner:
```shell
  npm run cypress:open

5.In the Cypress Test Runner, select the test file you want to run (e.g., "login.spec.js" or "create-user.spec.js").

6.The tests will execute, and you can view the results in the Cypress Test Runner interface.

