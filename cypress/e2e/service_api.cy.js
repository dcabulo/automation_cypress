import {
  SIGNUPURLAPI,
  LOGINURLAPI,
  generateRandomBody,
} from "../helpers/utils";

describe("Api Testing", () => {
  const userMock = generateRandomBody(15);

  it("Add user", () => {
    cy.servicePost(SIGNUPURLAPI, userMock).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it("User already exist", () => {
    cy.servicePost(SIGNUPURLAPI, userMock).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "errorMessage",
        "This user already exist."
      );
    });
  });
  it("login with user already created", () => {
    cy.servicePost(LOGINURLAPI, userMock).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).contains("Auth_token");
    });
  });
  it("login with an user that doesnt exist", () => {
    cy.servicePost(LOGINURLAPI, generateRandomBody(10)).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "errorMessage",
        "User does not exist."
      );
    });
  });
});
