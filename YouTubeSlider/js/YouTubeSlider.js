var YouTubeSlider = function() {
  this.input;
  this.submit;
  this.slider;
  this.navigation;
  this.items = [];
  this.itemWidth;
  this.itemsData;
  this.itemsOnPage;
  this.sliderPosition = 0;
  this.currentPage = 0;
  this.finalPage = Infinity;
  this.currentPageWidth;

  this.resetNavigation = function() {
    this.itemsOnPage = Math.round(this.slider.clientWidth / this.items[0].clientWidth);

    var pagesNumber = Math.floor(this.items.length / this.itemsOnPage - 1) + 1,
        that = this;

    this.navigation.innerHTML = '';

    for (var i = 0; i < this.items.length / this.itemsOnPage; i++) {
      var link = document.createElement('div');
      link.classList.add('slider-link');
      link.id = 'link' + i;

      if (i === this.currentPage) {
        link.classList.add('active-link')
      }

      link.addEventListener('click', function(e) {
        if (e.target.firstChild) {
          e.target.removeChild(e.target.firstChild);
        }
        this.swipeToPage(+e.target.id.slice(4));
      }.bind(this));

      link.addEventListener('mousedown', function(e) {
        var div = document.createElement('div');
        div.classList.add('link-tooltip');
        div.innerText = +e.target.id.slice(4) + 1;

        e.target.appendChild(div);
      }.bind(this));

      this.navigation.appendChild(link);
    }
  }
  
  this.build = function(DOM_Element) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('youtube-slider-wrapper');

    var header = document.createElement('header');
    header.classList.add('youtube-slider-header');

    this.input = document.createElement('input');
    this.input.classList.add('youtube-slider-search');
    this.input.setAttribute('type', 'text');
    this.input.setAttribute('placeholder', 'Search videos...');
/*REMOVE*/this.input.setAttribute('value', 'JavaScript');

    this.submit = document.createElement('button');
    this.submit.innerText = 'Search';
    this.submit.classList.add('youtube-slider-submit');

    this.slider = document.createElement('ul');
    this.slider.classList.add('youtube-slider');

    this.navigation = document.createElement('nav');
    this.navigation.classList.add('youtube-slider-nav');

    header.appendChild(this.input);
    header.appendChild(this.submit);

    wrapper.appendChild(header);
    wrapper.appendChild(this.slider);
    wrapper.appendChild(this.navigation);

    if (DOM_Element) {
      DOM_Element.nextSibling.insertBefore(wrapper)
    } else {
      document.body.appendChild(wrapper)
    }

    this.submit.addEventListener('click', function() {
      this.reload(15);
    }.bind(this));

    var that = this;
    var swipeStartTime;
    var swipeFinishTime;
    var swipeDuration;
    var swipeStartX;
    var swipeDistance = 0;
    var swipeSpeed;
    
    var pressed = false;

    function beginSwipe(downEvent) {
      swipeDistance = 0;
      swipeStartTime = new Date();
      swipeStartX = downEvent.pageX;
      pressed = true;
    }

    function swipeMove(moveEvent) {
      if (pressed) {
        swipeDistance = moveEvent.pageX - swipeStartX;
        that.items.forEach(function(item) {
          item.style.transform = 'translate3d(' + (that.sliderPosition + swipeDistance) + 'px, 0px, 0px)';
        });
      }
    }

    function finishSwipe(upEvent) {
      swipeFinishTime = new Date();
      swipeDuration = swipeFinishTime - swipeStartTime;
      swipeSpeed = swipeDistance / swipeDuration;
      if (swipeSpeed < 4 * that.slider.clientWidth) {
        swipeSpeed =  4 * that.slider.clientWidth;
      }
      pressed = false;
      if (swipeDistance > 0) {
        that.swipeToPage(that.currentPage - 1, swipeSpeed)
      } else if (swipeDistance < 0) {
        that.swipeToPage(that.currentPage + 1, swipeSpeed)
      }
    }

    this.slider.addEventListener('mousedown', function(downEvent) {
      beginSwipe(downEvent);
    }.bind(this));

    window.addEventListener('mouseup', function(upEvent) {
      finishSwipe(upEvent)
    }.bind(this));

    window.addEventListener('mousemove', function(moveEvent) {
      swipeMove(moveEvent)
    }.bind(this));

    this.slider.addEventListener("touchstart", function(e) {
      e.preventDefault();
      beginSwipe(e.changedTouches[0]);
    }, false);

    window..addEventListener("touchmove", function(e) {
      e.preventDefault();
      swipeMove(e.changedTouches[0]);
    }, false);

    window.addEventListener("touchend", function(e) {
      e.preventDefault();
      finishSwipe(e.changedTouches[0]);
    }, false);

    window.addEventListener('resize', function() {
      if (this.items.length > 0) {
        var n = this.currentPage * this.itemsOnPage,
            h = document.getElementsByTagName('html')[0].clientHeight - 170 + 'px';

        this.items.forEach(function(item) {
          item.style.height = h;
        })

        function resize(context) {
          context.currentPage = Math.floor(n / context.itemsOnPage);
          context.resetNavigation()
        }

        switch (this.itemsOnPage) {
          case 1:
            if (this.slider.clientWidth >= 700) {
              console.log('Grow 1 -> 2');
              this.itemsOnPage = 2;
              resize(this);
            }
            break;

          case 2:
            if (this.slider.clientWidth < 700) {
              console.log('Shrink 2 -> 1');
              this.itemsOnPage = 1;
              resize(this);
            }
            if (this.slider.clientWidth >= 1050) {
              console.log('Grow 2 -> 3');
              this.itemsOnPage = 3;
              resize(this);
            }
            break;

          case 3:
            if (this.slider.clientWidth < 1050) {
              console.log('Shrink 3 -> 2');
              this.itemsOnPage = 2;
              resize(this);
            }
            if (this.slider.clientWidth >= 1400) {
              console.log('Grow 3 -> 4');
              this.itemsOnPage = 4;
              resize(this);
            }
            break;

          case 4:
            if (this.slider.clientWidth < 1400) {
              console.log('Shrink 4 -> 3');
              this.itemsOnPage = 3;
              resize(this);
            }
            if (this.slider.clientWidth >= 1750) {
              console.log('Grow 4 -> 5');
              this.itemsOnPage = 5;
              resize(this);
            }
            break;

          case 5:
            if (this.slider.clientWidth < 1750) {
              console.log('Shrink 5 -> 4');
              this.itemsOnPage = 4;
              resize(this);
            }
            if (this.slider.clientWidth >= 2100) {
              console.log('Grow 5 -> 6');
              this.itemsOnPage = 6;
              resize(this);
            }
            break;

          case 6:
            if (this.slider.clientWidth < 2100) {
              console.log('Shrink 6 -> 5');
              this.itemsOnPage = 5;
              resize(this);
            }
            break;
        }
        if (this.finalPage < Infinity) {
          this.finalPage = Math.floor(this.items.length / this.itemsOnPage + 0.99) - 1;
        }
        this.swipeToPage(this.currentPage, Infinity);
      }
    }.bind(this));



    

    return this;
  }

  this.swipeToPage = function(pageNumber, speed) {
    if(!speed) {
      var speed = 3600
    }

    if (pageNumber < 0) {
      this.swipeToPage(0, speed);
      return;
    }

    if (pageNumber > this.finalPage) {
      this.swipeToPage(this.finalPage, speed);
      return;
    }

    this.navigation.children[this.currentPage].classList.remove('active-link');

    this.currentPage = pageNumber;
    this.sliderPosition = -this.currentPage * this.slider.clientWidth;
    this.items.forEach(function(item) {
      item.style.transition = 'transform ' + this.slider.clientWidth / speed + 's cubic-bezier(0,0,0.25,1)';
      item.style.transform = 'translate3d(' + this.sliderPosition + 'px, 0px, 0px)';
    }.bind(this));

    if (this.items.length - (this.currentPage + 1) * this.itemsOnPage < this.itemsOnPage) {
      this.load(15);
    }

    this.navigation.children[pageNumber].classList.add('active-link');
  }

  this.createSlide = function(element) {
    var li = document.createElement('li');
    li.classList.add('youtube-slider-item');
    li.style.height = document.getElementsByTagName('html')[0].clientHeight - 170 + 'px';

    var a = document.createElement('a');
    a.setAttribute('href', 'https://www.youtube.com/watch?v=' + element.id.videoId);
    a.setAttribute('target', '_blank');
    a.classList.add('video-reference');

    var preview = document.createElement('img');
    preview.setAttribute('src', element.snippet.thumbnails.medium.url);
    preview.classList.add('video-slide-preview');

    var title = document.createElement('h2');
    title.innerText = element.snippet.title;
    title.classList.add('video-slide-title');

    var description = document.createElement('p');
    description.classList.add('video-slide-description');
    description.innerHTML = (function(str) {
      var parts = str.split(/(http|ftp|https)(:\/\/[\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])/);
      var result = '';
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].search(/https|ftp|http/) === 0) {
          var href = parts[i].concat(parts[i + 1]);
          result = result.concat('<a href="' + href + '" class="inner-link" target="_blank">' + href + "</a>");
          i++;
        } else {
          result = result.concat(parts[i])
        }
      }
      return result;
    })(element.snippet.description);

    var publishDate = document.createElement('div');
    publishDate.innerText = (function(str) {
      var date = new Date(str);
      return 'Pablished: ' + date.toLocaleDateString();
    })(element.snippet.publishedAt)

    element.snippet.publishedAt.slice();
    publishDate.classList.add('video-slide-date');

    a.appendChild(preview);
    a.appendChild(title);
    li.appendChild(a);
    li.appendChild(description);
    li.appendChild(publishDate);
    this.slider.appendChild(li);

    this.itemWidth = this.itemWidth || li.clientWidth;

    return li;
  }

  this.addViewCount = function(i, count) {
    var div = document.createElement('div');
    div.innerHTML = 'View count: ' + count;
    div.classList.add('video-slide-views');
    
    this.items[i].appendChild(div);
  }

  this.reload = function(amount) {
    this.slider.innerHTML = '';
    this.items = [];
    return this.load(amount);
  }

  this.load = function(amount) {
    if (amount + this.items.length > 50) {
      this.finalPage = Math.floor(this.items.length / this.itemsOnPage + 0.99) - 1;
    }
    if (this.input.value && this.finalPage === Infinity) {
      var that = this,
          reqAmount = this.items.length + amount,
          xhr = new XMLHttpRequest,
          viewCount,
          startIndex = that.items.length;

      xhr.open('GET', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDeCqP1M9VcQvWWwLctQ5s9CuOcD-pAIgw&type=video&part=snippet&maxResults=' + reqAmount + '&q=' + this.input.value, true);
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var arr = JSON.parse(xhr.responseText).items.slice(-amount);
          arr.forEach(function(element, index) {

            var statisticXHR = new XMLHttpRequest;
            statisticXHR.open('GET', 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDeCqP1M9VcQvWWwLctQ5s9CuOcD-pAIgw&id=' + element.id.videoId + '&part=snippet,statistics', true);
            statisticXHR.send();
            statisticXHR.onreadystatechange = function() {
              if (statisticXHR.readyState == 4 && statisticXHR.status == 200) {
                viewCount = JSON.parse(statisticXHR.responseText).items[0].statistics.viewCount;
                that.addViewCount(startIndex + index, viewCount);
              }
            }

            that.items.push(that.createSlide(element))
          });
          that.resetNavigation();
        }
      }
    }

    return this;
  }
}