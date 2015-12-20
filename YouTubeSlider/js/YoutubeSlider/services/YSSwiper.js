var YSSwiper = function(inputSlider) {

  var startTime,
      finishTime,
      duration,
      startX,
      distance = 0,
      speed,
      mousePressed = false;

  function goLeft(speed) {
    if (inputSlider.currentPage === 0) {
      inputSlider.items.forEach(function(item) {
        item.style.transition = 'transform 0.3s cubic-bezier(0,0,0.25,1)';
        item.style.transform = 'translate3d(0px, 0px, 0px)';
      });
    } else {
      inputSlider.currentPage--;
      inputSlider.sliderPosition = -inputSlider.currentPage * (inputSlider.slider.clientWidth - 48);
      inputSlider.items.forEach(function(item) {
        item.style.transition = 'transform ' + inputSlider.slider.clientWidth / speed + 's cubic-bezier(0,0,0.25,1)';
        item.style.transform = 'translate3d(' + inputSlider.sliderPosition + 'px, 0px, 0px)';
      });
    }
  }
  function goRight(speed) {
    inputSlider.currentPage++;
    inputSlider.sliderPosition = -inputSlider.currentPage * (inputSlider.slider.clientWidth - 50);
    inputSlider.items.forEach(function(item) {
      item.style.transition = 'transform ' + inputSlider.slider.clientWidth / swipeSpeed + 's cubic-bezier(0,0,0.25,1)';
      item.style.transform = 'translate3d(' + inputSlider.sliderPosition + 'px, 0px, 0px)';
    });
    if (inputSlider.items.length - (inputSlider.currentPage + 1) * inputSlider.itemsOnPage <= inputSlider.itemsOnPage) {
      inputSlider.load(15);
    }
  }

  inputSlider.slider.addEventListener('mousedown', function(downEvent) {
    distance = 0;
    startTime = new Date();
    startX = downEvent.clientX;
    pressed = true;
  });

  window.addEventListener('mouseup', function(upEvent) {
    finishTime = new Date();
    duration = finishTime - startTime;
    speed = distance / duration;
    pressed = false;

    if (speed < 3 * inputSlider.slider.clientWidth) {
      speed = 3 * inputSlider.slider.clientWidth;
    }

    if (distance > 0) {
      //this.swipeToPage();
      goLeft(speed);
    } else if (distance < 0) {
      goRight(speed);
    }
  });

  window.addEventListener('mousemove', function(moveEvent) {
    if (pressed) {
      distance = moveEvent.clientX - startX;

      inputSlider.items.forEach(function(item) {
        item.style.transform = 'translate3d(' + (inputSlider.sliderPosition + distance) + 'px, 0px, 0px)';
      });
    }
  });

  this.swipeToPage = function(pageNumber, speed) {

  }
}