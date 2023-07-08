
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
