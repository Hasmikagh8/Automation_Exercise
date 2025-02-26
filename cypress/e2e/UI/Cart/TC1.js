import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", () => {
  cy.visit("/");
});

When("I click on Cart link", () => {
  cy.get("a[href='/view_cart']").first().click();
});

Then("Cart page should be opened", () => {
  cy.url().should("include", "/view_cart");
});

Then("{string} link exists", (linkText) => {
  cy.log(linkText);
  cy.contains(linkText).should("exist");
});

When("I click {string} link", (linkText) => {
  cy.contains(linkText).click();
});

Then("We should be moved to Products page", () => {
  cy.url().should("include", "/products");
});

