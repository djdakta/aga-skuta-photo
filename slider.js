(function slider() {
  function selector(sel) {return document.querySelector('.' + sel)};
  const photosWidth = selector('last_photo').offsetLeft + selector('last_photo').offsetWidth;
  const sliderWidth = selector('slider_container').offsetWidth;
  let posStart = 0;
  let posEnd = photosWidth - sliderWidth;
  const interval = 0.5 * sliderWidth;
  const oneMoveInterval = 20;

  function hideArrow() {
    if (posStart === 0) {
      selector('left').style.visibility = 'hidden';
    } else {
      selector('left').style.visibility = 'visible';
    };
    if (posEnd === 1) {
      selector('right').style.visibility = 'hidden'
    } else {
      selector('right').style.visibility = 'visible'
    }
  }
  hideArrow();

  function moveLeft() {
    let control = 0;
    const id = setInterval(move, 10);
    function move() {
      if (control >= interval) {
        clearInterval(id);
      } else {
        if (posStart <= - oneMoveInterval) {
          control = control + oneMoveInterval;
          posStart = posStart + oneMoveInterval;
          posEnd = posEnd + oneMoveInterval;
        } else {
          control = interval;
          posStart = 0;
          posEnd = photosWidth - sliderWidth;
        }
        selector('slider').style.left = posStart + 'px';
        hideArrow();
      };
    }
  }

  function moveRight() {
    let control = 0;
    const id = setInterval(move, 10);
    function move() {
      if (control >= interval) {
        clearInterval(id);
      } else {
        if (posEnd >= oneMoveInterval) {
          control = control + oneMoveInterval;
          posStart = posStart - oneMoveInterval;
          posEnd = posEnd - oneMoveInterval;
        } else {
          control = interval;
          posStart = sliderWidth - photosWidth + 1;
          posEnd = 1;
        }
        selector('slider').style.left = posStart + 'px';
        hideArrow();
      }
    }
  }

  selector('arrow_container').addEventListener('click', function(event) {
    if (event.target.classList.contains('left')) {
      moveLeft();
    } else if (event.target.classList.contains('right')) {
      moveRight();
    }
  });
})();
