**Plan**  
1. Introduce the project and its purpose.  
2. Provide installation instructions.  
3. Show how to run the Cypress tests.  
4. Include licensing.  

```markdown


# SpaceCats

## Introduction
SpaceCats is a Cypress-based testing project that checks the functionality of the [RSEndurance](https://rsendurance.com/) website. It demonstrates how to use Cypress Page Object Model (POM) to organize automated tests.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/SpaceCats.git
   cd SpaceCats
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To open the Cypress Test Runner:
```bash
npx cypress open
```
To run tests headlessly:
```bash
npx cypress run
```

## Project Structure

- **cypress/e2e/spaceCats.cy.js**: Contains E2E tests for RSEndurance.
- **cypress/support/pages/rsEndurancePage.js**: Page Object for the RSEndurance site.
- **cypress/support/commands.js**: Custom Cypress commands (empty by default).
- **cypress/support/e2e.js**: Global configuration and behavior for Cypress tests.

