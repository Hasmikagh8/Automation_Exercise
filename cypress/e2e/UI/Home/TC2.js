import { basePage } from "../../../Pages/BasePage";
import { products } from "../../../Pages/Products";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I am on the main page1", () => {
  cy.get(basePage.Locators.shopMenu)
    .find(basePage.Locators.linkHome)
    .and("contain", basePage.Names.home)
    .should("have.attr", basePage.Locators.style) // Ensure the style attribute exists
    .and("include", basePage.Locators.selectedFromMenu);
});

Then("Images are changed", () => {
  for (let i = 0; i < 3; i++) {
    cy.get(basePage.Locators.carouselIndicators)
      .find("li")
      .eq(i)
      .should("have.class", basePage.Locators.active);

    cy.get(basePage.Locators.h1).should("contain", basePage.Names.title);
    cy.get(basePage.Locators.h2).should("contain", basePage.Names.subtitle);
    cy.contains(basePage.Names.text);
    cy.contains("button", basePage.Names.btnTestCases).should("exist");
    // .and("be.visible");
    cy.contains("button", basePage.Names.btnAPIList).should("exist");
    //.and("be.visible");
    // cy.get(".carousel-inner").find("div").eq(i).should("have.class", "item active");
    cy.get(basePage.images[i]).should("be.visible");
    cy.wait(3500);
  }
});
