class BasePage {
  Names = {
    title: "AutomationExercise",
    subtitle: "Full-Fledged practice website for Automation Engineers",
    text: "All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.",
    btnTestCases: "Test Cases",
    btnAPIList: "APIs list for practice",
    featuresItems: "Features Items",
    home: "Home",
    products: "Products",
    cart: "Cart",
    featuresItemsCount: "34",
  };

  Locators = {
    shopMenu: ".shop-menu.pull-right",
    style: "style",
    selectedFromMenu: "color: orange",
    active: "active",
    leftControl: ".left control-carousel hidden-xs",
    rigChtontrol: ".right control-carousel hidden-xs",
    carouselIndicators: ".carousel-indicators",
    carouselInner: ".carousel-inner",
    carouselRight: ".fa fa-angle-right",
    carouselLeft: ".fa fa-angle-left",
    h1: "h1",
    h2: "h2",
    img: "img",
    testCasesBtn: ".test_cases_list",
    testCasesLink: "/test_cases",
    APIsListBtn: ".apis_list",
    APIsListLink: "/api_list",
    featuresItemsCl: ".features_items",
    itemsClass: ".col-sm-4",
    dataProductID: "data-product-id",
    selectedProductLink: "/product_details",
    chooseProduct: ".choose",
    aViewProduct: "View Product",
    viewProduct: ".view-product",
    getProductPicture: "/get_product_picture/",
    linkHome: "a[href='/']" ,
    linkProducts: "a[href='/products']",
    linkViewCart: "a[href='/view_cart']",
    arrowRight:".fa-angle-right",
    arrowLeft: ".fa-angle-left",
  };

  images = [
    'img[src="/static/images/home/girl2.jpg"]',
    'img[src="/static/images/home/girl1.jpg"]',
    'img[src="/static/images/home/girl3.jpg"]',
  ];
}

export const basePage = new BasePage();
