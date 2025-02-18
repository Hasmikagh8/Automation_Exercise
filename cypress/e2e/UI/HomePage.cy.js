import { basePage } from "../../Pages/BasePage";

describe("Automation Exercise carousel part", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Verify Carousel Functionality", () => {
    for (let i = 0; i < 3; i++) {
      cy.get(basePage.Locators.carouselIndicators)
        .find("li")
        .eq(i)
        .should("have.class", "active");

      // cy.get(".carousel-inner").find("div").eq(i).should("have.class", "item active");
     // cy.get(basePage.images.image[i]).should("be.visible");
      cy.wait(2000);
    }
  });
});
