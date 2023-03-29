# automation_cypress

**INTRODUCTION**

Simple automation end to end test

**OVERVIEW**

Two scenarios one for web testing and one for api testing.

**SETUP INSTRUCTION**

* Need node 16 or higher.
* npm install 
* npm run cy:run

if you want to run in a specific browser, spec or to generate reports use the flags change the words inside the brackets(Don't forget to erase the brackets).

* npm run cy:run -- --browser {path or browser} --spec "cypress/e2e/{specName}.cy.js" --reporter mochawesome
