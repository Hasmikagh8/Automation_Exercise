class BasePage {

  Locators = {
    leftControl: ".left control-carousel hidden-xs",
    rigChtontrol: ".right control-carousel hidden-xs",
    carouselIndicators: ".carousel-indicators",
    carouselInner: ".carousel-inner"
  };

  images = {image1: 'img[src="/static/images/home/girl1.jpg"]',
    image2 : '[img[src="/static/images/home/girl2.jpg"]',
    image3:'[img[src="/static/images/home/girl3.jpg"]',
  };
  
}

export const basePage = new BasePage();
