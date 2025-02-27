import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { basePage } from "../../../Pages/BasePage";
import { carts } from "../../../Pages/Cart";
import { products } from "../../../Pages/Products";

Given("I am on the home page", () => {
  cy.visit("/");
});

When("I click on Cart link", () => {
  cy.get(basePage.Locators.linkViewCart).first().click();
});

Then("Cart page should be opened", () => {
  cy.url().should("include", carts.Locators.viewCart);
});

Then("{string} link exists", (linkText) => {
  cy.log(linkText);
  cy.contains(linkText).should("exist");
});

When("I click {string} link", (linkText) => {
  cy.contains(linkText).click();
});

Then("We should be moved to Products page", () => {
  cy.url().should("include", products.Locators.product);
});

