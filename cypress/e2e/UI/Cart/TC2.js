import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { basePage } from "../../../Pages/BasePage";
import { products } from "../../../Pages/Products";
import { carts } from "../../../Pages/Cart";

Given("I am opening the products page", () => {
  cy.visit("/");
  cy.get(basePage.Locators.linkProducts).click();
});

When("I hover over the first product", () => {
  cy.get(".productinfo.text-center")
    .find(basePage.Locators.img)
    .first()
    .should("have.attr", "src", "/get_product_picture/1")
    .realHover("mouse");
});

When("I click Add to cart", () => {
  cy.get('a[data-product-id="1"]').first().click();
});

Then("Confirmation modal appears", () => {
  cy.contains(products.Names.added).should("be.visible");
  cy.contains(carts.Names.viewCart).should("be.visible");
});

When("I click on View Cart", () => {
  cy.contains(carts.Names.viewCart).click();
});

Then("I should be moved to Cart page", () => {
  cy.url().should("include", carts.Locators.viewCart);
});

When("Cart should be selected in Menu", () => {
  cy.get(basePage.Locators.linkViewCart)
    .should("contain", basePage.Names.cart)
    .should("have.attr", basePage.Locators.style) // Ensure the style attribute exists
    .and("include", basePage.Locators.selectedFromMenu);
});
