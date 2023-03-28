const DEFAULTURL = "https://www.demoblaze.com/";
const SIGNUPURLAPI = "https://api.demoblaze.com/signup";
const LOGINURLAPI = "https://api.demoblaze.com/login";

const selectors = {
  addProductButton: ".col-sm-12 > .btn",
  homeButton: "#nava",
  cartButton: "#cartur",
  purchaseButton: ".col-lg-1 > .btn",
  nameField: "#name",
  countryField: "#country",
  cityField: "#city",
  cartField: "#card",
  monthField: "#month",
  yearField: "#year",
  purchaseModalButton:
    "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary",
  confirmPurchaseButton: ".confirm",
};

const selectAndClickProduct = (productName) => {
  cy.get(".hrefch").each(($text) => {
    if ($text.text() == productName) {
      console.log("Found");
      cy.wrap($text).click();
    }
  });
};

const generateRandomBody = (passwordLenght) => {
  let randomString = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < passwordLenght) {
    randomString += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
    counter += 1;
  }

  console.log(randomString);

  return {
    username: randomString,
    password: "SuperSecretPassword",
  };
};

export {
  selectAndClickProduct,
  generateRandomBody,
  selectors,
  DEFAULTURL,
  SIGNUPURLAPI,
  LOGINURLAPI,
};
