(function hamburger() {
  function selector(sel) {
    return document.querySelector('.' + sel);
  }

  selector('hamburger').addEventListener('click', function(event) {
    if (selector('for_js').classList.contains('nav')) {
      selector('for_js').classList.remove('slide_out');
      selector('for_js').classList.remove('nav');
      selector('for_js').classList.add('nav_open');
    }
  });

  selector('exit_nav').addEventListener('click', function(event) {
    selector('for_js').classList.add('slide_out');
    setTimeout(function() {
      selector('for_js').classList.remove('nav_open');
      selector('for_js').classList.remove('slide_out');
      selector('for_js').classList.add('nav');
    }, 300);
  });  
})()
