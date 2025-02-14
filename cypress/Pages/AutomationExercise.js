class AutomationExercise {
  Names = {
    searchProduct: ["top", "tshirt", "jean"],
    response405: "This request method is not supported.",
    responseBadReq400:
      "Bad request, search_product parameter is missing in POST request.",
    responseBadLP400:
      "Bad request, email or password parameter is missing in POST request.",
  };

  invalidLoginPass = {
    email: "invalid@mailinator.com",
    password: "invalid",
  };
}
export const automationExercise = new AutomationExercise();
