import { resultJson } from "../../fixtures/resultExample.json";
import { automationExercise } from "../../Pages/AutomationExercise";

describe("Automation Exercise", () => {
  const email = Cypress.env("globalEmail");
  const password = Cypress.env("globalPassword");

  it("Get All Products List", () => {
    cy.getAllProductsList().then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      expect(JSON.parse(resp.body)).to.deep.equal(resultJson);
    });
  });

  it("Post to All Products List", () => {
    cy.postToAllProductsList(3, "TestProduct").then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      expect(resp.body.responseCode).to.eq(405);
      expect(resp.body.message).to.eq(automationExercise.Names.response405);
    });
  });

  it("Get All Brands List", () => {
    cy.getAllBrandsList().then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      let response = JSON.parse(resp.body);
      expect(response.brands[0].id).to.equal(1);
      expect(response.brands[0].brand).to.equal("Polo");
    });
  });

  it("Put to All Brands List", () => {
    cy.putToAllBrandList().then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      expect(resp.body.responseCode).to.eq(405);
      expect(resp.body.message).to.eq(automationExercise.Names.response405);
    });
  });

  it("Post To Search Product", () => {
    cy.postToSearchProduct(1).then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      expect(resp.body.responseCode).to.eq(400);
      expect(resp.body.message).to.eq(
        automationExercise.Names.responseBadReq400
      );
    });
  });

  it("Post To Search Product without param", () => {
    cy.postToSearchProductWithoutParam().then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      expect(resp.body.responseCode).to.eq(400);
      expect(resp.body.message).to.eq(
        automationExercise.Names.responseBadReq400
      );
    });
  });

  it("POST To Verify Login with valid details", () => {
    cy.postToVerifyLogin({ email: email, password: password }).then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      expect(resp.body.responseCode).to.eq(400);
      expect(resp.body.message).to.eq(
        automationExercise.Names.responseBadLP400
      );
    });
  });

  it("POST To Verify Login with invalid details", () => {
    cy.postToVerifyLogin(automationExercise.invalidLoginPass).then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      expect(resp.body.responseCode).to.eq(400);
      expect(resp.body.message).to.eq(
        automationExercise.Names.responseBadLP400
      );
    });
  });

  it("Delete To Verify Login", () => {
    cy.deleteToVerifyLogin().then((resp) => {
      cy.log(resp);
      expect(resp.status).to.eq(200);
      let response = JSON.parse(resp.body);
      expect(response.responseCode).to.eq(405);
      expect(response.message).to.eq(automationExercise.Names.response405);
    });
  });
});
