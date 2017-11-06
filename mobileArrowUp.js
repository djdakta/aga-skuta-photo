(function mobileArrowUp() {
  document.querySelector('.back_to_top').addEventListener('click', function(event) {
    const tempo = 70;
    let space = window.scrollY;
    function goUp() {
      setTimeout(function() {
        if (space >= tempo) {
          space = space - tempo;
          window.scrollTo(0, space);
          goUp();
        } else {
          space = 0;
          window.scrollTo(0, space);
        }
      }, 1);
    };
    goUp();
  })
})()
