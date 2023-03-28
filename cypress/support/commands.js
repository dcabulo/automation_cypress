// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { selectors, selectAndClickProduct } from "../helpers/utils";

Cypress.Commands.add("addProductToCart", (productName) => {
  selectAndClickProduct(productName);
  cy.get(selectors.addProductButton).contains("Add to cart").click();
  cy.on("window:alert", (t) => {
    //assertions
    expect(t).to.contains("Product added");
  });
  cy.get(selectors.homeButton).click();
});

Cypress.Commands.add(
  "fillForm",
  (nameInfo, countryInfo, cityInfo, cartInfo, monthInfo, yearInfo) => {
    cy.get(selectors.nameField).type(nameInfo);
    cy.get(selectors.countryField).type(countryInfo);
    cy.get(selectors.cityField).type(cityInfo);
    cy.get(selectors.cartField).type(cartInfo);
    cy.get(selectors.monthField).type(monthInfo);
    cy.get(selectors.yearField).type(yearInfo);
  }
);

Cypress.Commands.add("servicePost", (url, bodyObject) => {
  cy.request({
    method: "POST",
    url: url,
    failOnStatusCode: false,
    body: bodyObject,
  });
});

Cypress.Commands.add("assertProductExist", (productBox) => {
  cy.get(`#tbodyid > :nth-child(${productBox}) > :nth-child(2)`).should(
    "be.visible"
  );
});
