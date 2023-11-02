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
  

//   document.addEventListener('DOMContentLoaded', () => {
//     let button = document.querySelector('.button-up');
//     if (button) {
//       window.onscroll = function () {
//         if (window.pageYOffset > 800) {
//           button.classList.add('button-up--visible');
//         } else {
//           button.classList.remove('button-up--visible');
//         }
//       };
  
//       button.onclick = function () {
//         scrollToTop(1000); // 1000 - время анимации в миллисекундах (1 секунда)
//       };
//     }
//   });
  
//   function scrollToTop(duration) {
//     const startingY = window.pageYOffset;
//     const startTime = performance.now();
  
//     function easeInOutQuad(time, start, change, duration) {
//       time /= duration / 2;
//       if (time < 1) return (change / 2) * time * time + start;
//       time--;
//       return (-change / 2) * (time * (time - 2) - 1) + start;
//     }
  
//     function animation() {
//       const time = performance.now() - startTime;
//       window.scrollTo(0, easeInOutQuad(time, startingY, -startingY, duration));
//       if (time < duration) requestAnimationFrame(animation);
//     }
  
//     requestAnimationFrame(animation);
//   }
  


//   document.addEventListener('DOMContentLoaded', () => {
//     let button = document.querySelector('.button-up');
//     if (button) {
//       window.onscroll = function () {
//         if (window.pageYOffset > 800) {
//           button.classList.add('button-up--visible');
//         } else {
//           button.classList.remove('button-up--visible');
//         }
//       };
  
//       button.onclick = function () {
//         // Прокручиваем страницу к началу плавно
//         window.scrollBy()({
//           top: 0,
//           behavior: 'smooth'
//         });
//       };
//     }
//   });
  
