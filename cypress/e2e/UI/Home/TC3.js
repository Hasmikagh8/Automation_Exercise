import { basePage } from "../../../Pages/BasePage";
import { products } from "../../../Pages/Products";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("Click on Right arrow button", () => {
  cy.get(basePage.images[0]).should("be.visible");
  cy.get(basePage.Locators.arrowRight).first().click();
});

Then("Image should be changed", () => {
  cy.get(basePage.images[1]).should("be.visible");
});

When("Click on Left arrow button", () => {
  cy.get(basePage.Locators.arrowLeft).first().click();
});

Then("Image should be changed back", () => {
  cy.get(basePage.images[0]).should("be.visible");
});
