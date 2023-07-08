// chat
window.addEventListener('load', function(){
  if(window.innerWidth <= 767){
    var chat = document.querySelector ('.chat__list');
    var chatTogle = document.querySelector ('.chat__btn-toggle--open');
    var chatClouse = document.querySelector ('.chat__btn-toggle--clouse');

    if(chatTogle){
      chatTogle.addEventListener('click', function(){
        chat.classList.add('chat__list--showed');
        chatClouse.classList.add('__show')
        chatClouse.classList.remove('__hide')
        chatTogle.classList.add('__hide')

    });
    chatClouse.addEventListener('click', function(){
        chat.classList.remove('chat__list--showed');
        chatClouse.classList.remove('__show')
        chatClouse.classList.add('__hide')
        chatTogle.classList.remove('__hide')
    });
      document.addEventListener("keydown", function (event) {
        // console.log(ev.keyCode); не вывел в консоль почему-то????
          if (event.code == "Escape") {
            chat.classList.remove('chat__list--showed');
          }
      });
    }
  }
});

