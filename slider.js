// (
  function slider() {
  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const slider = document.querySelector('.slider');
  const arrow_container = document.querySelector('.arrow_container');
  const photosWidth = document.querySelector('.last_photo').offsetLeft + document.querySelector('.last_photo').offsetWidth;
  const sliderWidth = document.querySelector('.slider_container').offsetWidth;
  let posStart = 0;
  let posEnd = photosWidth - sliderWidth;
  const interval = 0.5 * sliderWidth;
  const oneMoveInterval = 20;

  function hideArrow() {
    if (posStart === 0) {
      left.style.visibility = 'hidden';
    } else {
      left.style.visibility = 'visible';
    };
    if (posEnd === 1) {
      right.style.visibility = 'hidden'
    } else {
      right.style.visibility = 'visible'
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
        slider.style.left = posStart + 'px';
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
        slider.style.left = posStart + 'px';
        hideArrow();
      }
    }
  }

  arrow_container.addEventListener('click', function(event) {
    if (event.target.classList.contains('left')) {
      moveLeft();
    } else if (event.target.classList.contains('right')) {
      moveRight();
    }
  });
}
// )();
window.addEventListener('load', slider());
