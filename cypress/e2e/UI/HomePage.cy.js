import { basePage } from "../../Pages/BasePage";

let productIdConst = 0;

describe("Automation Exercise carousel part", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify Carousel Functionality", () => {
    //Verify that Home section is selected
    cy.get(basePage.Locators.shopMenu)
      .find('a[href="/"]')
      .and("contain", basePage.Names.home)
      .should("have.attr", basePage.Locators.style) // Ensure the style attribute exists
      .and("include", basePage.Locators.selectedFromMenu);

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

  it.skip("Verify Carousel Functionality by >", () => {
    cy.get(basePage.images[0]).should("be.visible");

    for (let j = 0; j < 3; j++) {
      cy.get("a.right.control-carousel.hidden-xs").click();

      if (j < 2) {
        cy.get(basePage.images[j + 1]).should("be.visible");
      } else {
        cy.get(basePage.images[0]).should("be.visible");
      }
    }
  });

  it("Verify buttons Test Cases and APIs Lists buttons functionality", () => {
    cy.contains("button", basePage.Names.btnTestCases).click();
    cy.url().should("include", basePage.Locators.testCasesLink);
    cy.go("back");

    cy.get(basePage.Locators.APIsListBtn)
      .should("have.attr", "href")
      .and("include", basePage.Locators.APIsListLink);
    cy.contains("button", basePage.Names.btnAPIList).click();
    cy.url().should("include", basePage.Locators.APIsListLink);
    cy.go("back");
  });

  it("Verify 'Features Items' has 34 items and main data are visible", () => {
    cy.get(basePage.Locators.featuresItemsCl)
      .find("img")
      .should("have.length", basePage.Names.featuresItemsCount);

    for (let i = 0; i < basePage.Names.featuresItemsCount; i++) {
      cy.get(basePage.Locators.featuresItemsCl)
        .find("img")
        .eq(i)
        .should("be.visible");
    }
  });

  it("Verify any item selection", () => {
    const itemSelection = Math.floor(
      Math.random() * basePage.Names.featuresItemsCount
    );
    cy.log(itemSelection);

    cy.get(basePage.Locators.featuresItemsCl)
      .find(basePage.Locators.itemsClass)
      .should("have.length", basePage.Names.featuresItemsCount);

    cy.get(basePage.Locators.featuresItemsCl)
      .find(basePage.Locators.itemsClass)
      .eq(itemSelection)
      .find("a")
      .invoke("attr", basePage.Locators.dataProductID)
      .then((productId) => {
        productIdConst = productId;
        cy.log(productIdConst);
      });

    cy.get(basePage.Locators.featuresItemsCl)
      .find(basePage.Locators.itemsClass)
      .eq(itemSelection)
      .find(basePage.Locators.chooseProduct)
      .find("a")
      .and("contain", basePage.Locators.aViewProduct)
      .click();

    //Verify that Product section is selected
    cy.then(() => {
      cy.get(".shop-menu.pull-right")
        .find('a[href="/products"]')
        .should("contain", basePage.Names.products)
        .should("have.attr", basePage.Locators.style) // Ensure the style attribute exists
        .and("include", basePage.Locators.selectedFromMenu);
    });

    cy.then(() => {
      cy.url().should(
        "include",
        `${basePage.Locators.selectedProductLink}/${productIdConst}`
      );
    });

    // check the image in opened page
    cy.then(() => {
      cy.get(basePage.Locators.viewProduct)
        .find("img")
        .should("have.attr", "src", `${basePage.Locators.getProductPicture}${productIdConst}`);
    });
  });
});
