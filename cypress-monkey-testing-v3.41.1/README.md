# Monkey Testing for Ghost CMS App using Cypress

This project demonstrates the use of Cypress to perform monkey testing on the Ghost CMS application. The project has been developed and tested using Node v14.17.3.

## Project Information

- University: Universidad de los Andes
- Project: Monkey testing of the Ghost CMS application

## Members

- David Sánchez
- Juan Chiroque
- Diego Correa
- Julio Cardenas

This project aims to test the Ghost CMS application by simulating random user actions and analyzing the application's behavior under such conditions. Using Cypress, we can easily automate this process and detect potential issues that may arise when using the application.

## Demo

![Image Description](./docs/uniandes-monkeys.gif)

## Prerequisites

- Node.js v14.17.3
- Google Chrome browser
- Docker

## Optional

If you don't have Ghost CMS 3.41.1 installed execute this command

```bash
docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:3001 -p 3001:2368 ghost:3.41.1
```

## Installation

To set up the project on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/dcsm8/uniandes-monkeys.git
```

2. Navigate to the project directory:

```bash
cd uniandes-monkeys
```

3. Install the required dependencies:

```bash
npm install
```

4. Update the baseUrl in the cypress.config.js

```bash
baseUrl: "http://localhost:3001"
```

5. Open the Cypress Test Runner:

```bash
npx cypress open
```

## Running the Tests

1. In the Cypress Test Runner, click on the **E2E Testing** tab.

2. Select **Chrome** as your browser, and then click **Start E2E testing in Chrome**.

3. Under the **E2E specs** section, select the `monkey.cy.js` file to start running the monkey testing.
