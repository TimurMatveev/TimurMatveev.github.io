var YouTubeSlider = function() {
  this.input;
  this.submit;
  this.slider;
  this.navigation;
  this.items = [];
  this.itemsOnPage;
  this.itemWidth;
  this.sliderPosition = 0;
  this.currentPage = 0;
  this.currentPageWidth;
  

  this.slideToPage();

  this.evaluateSizes;

  this.assignSizes;

  this.createSlide;

  this.push;

  this.reload;

  this.load;
}