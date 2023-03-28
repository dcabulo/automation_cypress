import { selectors, DEFAULTURL } from "../helpers/utils";

describe("Buy two items from the page", () => {
  it("Added items and purchase", () => {
    cy.visit(DEFAULTURL);
    cy.addProductToCart("Nokia lumia 1520");
    cy.addProductToCart("Iphone 6 32gb");
    cy.get(selectors.cartButton).contains("Cart").click();
    cy.assertProductExist(1);
    cy.assertProductExist(2);
    cy.get(selectors.purchaseButton).contains("Place Order").click();
    cy.fillForm(
      "MockUsername",
      "mockCountry",
      "mockCity",
      "mockCartInfo",
      "mockMonth",
      "mockYear"
    );
    cy.get(selectors.purchaseModalButton).contains("Purchase").click();
    cy.get(selectors.confirmPurchaseButton).contains("OK").click();
    cy.wait(1000);
  });
});
