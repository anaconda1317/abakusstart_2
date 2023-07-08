// tooltip
window.addEventListener('load', function(){
  //   if(window.innerWidth <= 768){
      var tooltip = document.querySelector ('.tooltip__content');
      var tooltipTogle = document.querySelector ('.tooltip__toggle');


      if(tooltipTogle){
        tooltipTogle.addEventListener('click', function(){
          tooltip.classList.toggle('__opened');
      });
        document.addEventListener("keydown", function (event) {
            if (event.code == "Escape") {
              tooltip.classList.remove('__opened');
            }
        });
      // }
    }
  });
