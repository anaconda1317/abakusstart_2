
document.addEventListener('DOMContentLoaded', ()=>{
  let button = document.querySelector('.button-up');
  if(button){
      window.onscroll = function () {
          if (window.pageYOffset > 800) {
              button.classList.add('button-up--visible')
          } else {
              button.classList.remove( 'button-up--visible' );
          }
      };

    button.onclick = function () {
        window.scrollTo(0, 0);
    };
  }
})


// const scrollToTopButton = document.querySelector('.scroll-to-top');

// scrollToTopButton.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// });
