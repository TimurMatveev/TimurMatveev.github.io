var YSCreator = function(inputSlider) {
  this.build = function() {
    var wrapper = document.createElement('div');
    wrapper.classList.add('youtube-slider-wrapper');

    var header = document.createElement('header');
    header.classList.add('youtube-slider-header');

    inputSlider.input = document.createElement('input');
    inputSlider.input.classList.add('youtube-slider-search');
    inputSlider.input.setAttribute('type', 'text');
    inputSlider.input.setAttribute('placeholder', 'Search videos...');
/*REMOVE*/inputSlider.input.setAttribute('value', 'JavaScript');

    inputSlider.submit = document.createElement('button');
    inputSlider.submit.innerText = 'Search';
    inputSlider.submit.classList.add('youtube-slider-submit');

    inputSlider.slider = document.createElement('ul');
    inputSlider.slider.classList.add('youtube-slider');

    inputSlider.navigation = document.createElement('nav');
    inputSlider.navigation.classList.add('youtube-slider-nav');

    header.appendChild(inputSlider.input);
    header.appendChild(inputSlider.submit);

    wrapper.appendChild(header);
    wrapper.appendChild(inputSlider.slider);
    wrapper.appendChild(inputSlider.navigation);

    document.body.appendChild(wrapper);

    inputSlider.submit.addEventListener('click', function() {
      inputSlider.reload(15);
    });
/*
    var that = slider;
    var swipeStartTime;
    var swipeFinishTime;
    var swipeDuration;
    var swipeStartX;
    var swipeDistance = 0;
    var swipeSpeed;
    function goLeft() {
      if (that.currentPage === 0) {
        that.items.forEach(function(item) {
          item.style.transition = 'transform 0.3s cubic-bezier(0,0,0.25,1)';
          item.style.transform = 'translate3d(0px, 0px, 0px)';
        });
      } else {
        that.currentPage--;
        that.sliderPosition = -that.currentPage * (that.slider.clientWidth - 48);
        that.items.forEach(function(item) {
          item.style.transition = 'transform ' + that.slider.clientWidth / swipeSpeed + 's cubic-bezier(0,0,0.25,1)';
          item.style.transform = 'translate3d(' + that.sliderPosition + 'px, 0px, 0px)';
        });
      }
    }
    function goRight() {
      that.currentPage++;
      that.sliderPosition = -that.currentPage * (that.slider.clientWidth - 50);
      that.items.forEach(function(item) {
        item.style.transition = 'transform ' + that.slider.clientWidth / swipeSpeed + 's cubic-bezier(0,0,0.25,1)';
        item.style.transform = 'translate3d(' + that.sliderPosition + 'px, 0px, 0px)';
      });
      if (that.items.length - (that.currentPage + 1) * that.itemsOnPage <= that.itemsOnPage) {
        that.load(15);
      }
    }
    var pressed = false;
    that.slider.addEventListener('mousedown', function(downEvent) {
      swipeDistance = 0;
      swipeStartTime = new Date();
      swipeStartX = downEvent.clientX;
      pressed = true;
    });

    window.addEventListener('mouseup', function(upEvent) {
      swipeFinishTime = new Date();
      swipeDuration = swipeFinishTime - swipeStartTime;
      swipeSpeed = swipeDistance / swipeDuration;
      if (swipeSpeed < 4 * that.slider.clientWidth) {
        swipeSpeed =  4 * that.slider.clientWidth;
      }
      pressed = false;
      if (swipeDistance > 0) {
        goLeft();
      } else if (swipeDistance < 0) {
        goRight();
      }
    });

    window.addEventListener('mousemove', function(moveEvent) {
      if (pressed) {
        swipeDistance = moveEvent.clientX - swipeStartX;
        that.items.forEach(function(item) {
          item.style.transform = 'translate3d(' + (that.sliderPosition + swipeDistance) + 'px, 0px, 0px)';
        });
      }
    });
*/
    inputSlider.evaluateSizes();
  }
}