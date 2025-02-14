import { resultJson } from "../fixtures/resultExample.json";
import { putChange } from "../fixtures/resultExample.json";
import { searchProduct } from "../fixtures/resultExample.json";
import { automationExercise } from "../Pages/AutomationExercise.js";

Cypress.Commands.add("getAllProductsList", () => {
  cy.request({
    url: `${Cypress.config("baseUrl")}${"/productsList"}`,
    followRedirect: false,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("postToAllProductsList", (number, newName) => {
  let newProduct = resultJson.products[number];
  newProduct.name = newName;
  cy.request({
    method: "POST",
    url: `${Cypress.config("baseUrl")}${"/productsList"}`,
    followRedirect: false,
    body: newProduct,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("getAllBrandsList", () => {
  cy.request({
    url: `${Cypress.config("baseUrl")}${"/brandsList"}`,
    followRedirect: false,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("putToAllBrandList", (number, newName) => {
  let changedBrand = "";
  cy.getAllBrandsList().then((resp1) => {
    let response = JSON.parse(resp1.body);
    let changedBrand = response.brands[0];
    changedBrand.brand = "POLO1";
  });
  cy.request({
    method: "PUT",
    url: `${Cypress.config("baseUrl")}${"/brandsList"}`,
    followRedirect: false,
    body: putChange,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("postToSearchProduct", (numSP) => {
  searchProduct.search_product = automationExercise.Names.searchProduct[numSP];
  cy.request({
    method: "POST",
    url: `${Cypress.config("baseUrl")}${"/searchProduct"}`,
    followRedirect: false,
    body: searchProduct,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("postToSearchProductWithoutParam", (numSP) => {
  cy.request({
    method: "POST",
    url: `${Cypress.config("baseUrl")}${"/searchProduct"}`,
    followRedirect: false,
    body: {},
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("postToSearchProductWithoutParam", (numSP) => {
  cy.request({
    method: "POST",
    url: `${Cypress.config("baseUrl")}${"/searchProduct"}`,
    followRedirect: false,
    body: {},
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("postToVerifyLogin", (userPass) => {
  cy.request({
    method: "POST",
    url: `${Cypress.config("baseUrl")}${"/verifyLogin"}`,
    followRedirect: false,
    body: userPass,
  }).then((resp) => {
    return resp;
  });
});

Cypress.Commands.add("deleteToVerifyLogin", () => {
  cy.request({
    method: "DELETE",
    url: `${Cypress.config("baseUrl")}${"/verifyLogin"}`,
    followRedirect: false,
  }).then((resp) => {
    return resp;
  });
});
