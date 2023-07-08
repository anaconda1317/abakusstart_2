document.addEventListener('DOMContentLoaded', ()=>{
  if(document.querySelector('#feedback-form')){
      document.querySelector('#feedback-form').addEventListener('submit', function(e){

          let response = grecaptcha.getResponse();
          console.log(response);
          if(response.length == 0) {
            e.preventDefault();
              if(document.querySelector('.feedback-form__item--captcha-error')){
                  document.querySelector('.feedback-form__item--captcha-error').textContent = 'Вы не прошли проверку CAPTCHA должным образом'
              }
              setTimeout(()=>{
                  if(document.querySelector('.feedback-form__item--captcha-error')){
                      document.querySelector('.feedback-form__item--captcha-error').textContent = ''
                  }
              }, 10000)
              return false;
          }
      });
  }

})
