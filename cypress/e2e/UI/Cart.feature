Feature: Cart

  Scenario: Verify Cart page
    Given I am on the home page
    When I click on Cart link
    Then Cart page should be opened
    And "<Here>" link exists
    When I click "<Here>" link
    Then We should be moved to Products page

  @only
  Scenario: Add product to Cart
    Given I am opening the products page
    When I hover over the first product
    When I click Add to cart
    Then Confirmation modal appears
    When I click on View Cart
    Then I should be moved to Cart page
    And Cart should be selected in Menu

    Examples:
      | Here |
      | here |
