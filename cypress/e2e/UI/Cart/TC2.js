import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { basePage } from "../../../Pages/BasePage";
import { products } from "../../../Pages/Products";

Given("I am opening the products page", () => {
  cy.visit("/");
  cy.get("a[href='/products']").click();
});

When("I hover over the first product", () => {
  cy.get(".productinfo.text-center")
    .find("img")
    .first()
    .should("have.attr", "src", "/get_product_picture/1")
    .realHover("mouse");
});

When("I click Add to cart", () => {
  cy.get('a[data-product-id="1"]').first().click();
});

Then("Confirmation modal appears", () => {
  cy.contains("Added!").should("be.visible");
  cy.contains("View Cart ").should("be.visible");
});

When("I click on View Cart", () => {
  cy.contains("View Cart").click();
});

Then("I should be moved to Cart page", () => {
  cy.url().should("include", "/view_cart");
});

When("Cart should be selected in Menu", () => {
  cy.get('a[href="/view_cart"]')
    .should("contain", basePage.Names.cart)
    .should("have.attr", basePage.Locators.style) // Ensure the style attribute exists
    .and("include", basePage.Locators.selectedFromMenu);
});
