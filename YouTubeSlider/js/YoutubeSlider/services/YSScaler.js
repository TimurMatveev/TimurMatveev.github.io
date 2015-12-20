var YSScaler = function(slider) {
  window.addEventListener('resize', function() {
    slider.evaluateSizes();
    slider.assignSizes();
  });
}