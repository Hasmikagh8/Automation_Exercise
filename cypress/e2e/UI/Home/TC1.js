import { basePage } from "../../../Pages/BasePage";
import { products } from "../../../Pages/Products";
import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";


Given("I am on the main page", () => {
   cy.visit("/")
});

When("I click on Products link", () => {
   cy.get(basePage.Locators.linkProducts).click();
});

Then("Products page should be opened", () => {
  cy.url().should('include', products.Locators.product)
});

