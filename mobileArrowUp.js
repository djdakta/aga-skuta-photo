(function mobileArrowUp() {
  // const clickHandler = function(event) {
  //   const tempo = 70;
  //   let space = window.scrollY;
  //   function goUp() {
  //     setTimeout(function() {
  //       if (space >= tempo) {
  //         space = space - tempo;
  //         window.scrollTo(0, space);
  //         goUp();
  //       } else {
  //         space = 0;
  //         window.scrollTo(0, space);
  //       }
  //     }, 1);
  //   };
  //   goUp();
  // }
  // document.querySelector('.back_to_top').addEventListener('click', clickHandler)
  const header = document.querySelector('.header');
  const arrow = docuent.querySelector('.back_to_top')
  function goUp() {
    header.classList.add('go_up');
    setTimeout(() => {
      header.classList.remove('go_up')
    }, 500);
  };
  arrow.addEventListener('click', goUp());
};
)()
