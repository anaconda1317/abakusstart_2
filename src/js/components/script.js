document.addEventListener('DOMContentLoaded', function(){
  let link = document.querySelector(".banner__action-сall");
  let popup = document.querySelector(".modal__window");
  let cards = document.querySelector('.card-list-container');
  let overlay = document.querySelector('.__modal__overlay')
  if(popup){
    let modalButton =popup.querySelector(".modal__button");
    let close = popup.querySelector(".modal-close");

    let mainForm = popup.querySelector("form");
    let name = popup.querySelector("[name=name]");
    let tel = popup.querySelector("[name=phone]");

    let isStorageSupport = true;
    let storage = "";
    if(link){
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
        if(overlay){
          overlay.classList.add('modal__shadow')
        }
        // форма открылась -сразу автофокус ставим
        if (name) {
          name.focus();
        }
      });
    }
    if(document.querySelector('.modal-open')){
        openModal(document.querySelector('.modal-open'))
    }
    function openModal(element) {
      let overlay = document.querySelector('.__modal__overlay')

      element.addEventListener("click", function (evt) {
        if(evt.currentTarget.classList.contains('modal-open')) {
          let hiddenInput = document.querySelector('.hidden__input-current__name')
          hiddenInput.setAttribute('value', evt.currentTarget.dataset.name);
        }
        evt.preventDefault();
        popup.classList.add("modal-show");
        overlay.classList.add('modal__shadow')
        // форма открылась -сразу автофокус ставим
        if (name) {
          name.focus();
        }
      });
    }
    if(cards){
      let btnOrders = cards.querySelectorAll('.modal-open');

      btnOrders.forEach(function(element ){
        openModal(element);
      } );
    }
    // скрипт при заполнениии формы кнопка меняет цвет

    function validateForm(context) {
        if(context.querySelector('input[type=text]').value !== ''
            && context.querySelector('input[type=tel]').value !== ''
            && context.querySelector('input[type=checkbox]').checked
        ){
            context.querySelector('button[type=submit]').classList.add('modal__button-undisabled');
            context.querySelector('button[type=submit]').removeAttribute('disabled');
        }else{
            context.querySelector('button[type=submit]').classList.remove('modal__button-undisabled');
            context.querySelector('button[type=submit]').setAttribute('disabled', 'disabled');
        }
    }
    mainForm.addEventListener('input', function (e){
        validateForm(this);
    })

    if(overlay){
      overlay.addEventListener("click", function (evt) {


        if(!evt.target.closest('.modal__window')){
          name.value = '';
          tel.value = '';
          overlay.classList.remove('modal__shadow')
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }

      });

    }
    close.addEventListener("click", function (evt) {

      evt.preventDefault();

      if(overlay){

        overlay.classList.remove('modal__shadow')
      }
      name.value = '';
      tel.value = '';
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    });

    mainForm.addEventListener("submit", function (evt) {
      if (typeof(name.value) === "undefined" || typeof(tel.value) === "undefined") {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          if(overlay){
            overlay.classList.remove('modal__shadow')
          }
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });
  }

  // sub-menu for uslugi in main menu  дополнит функции - закрытие sub-menu по клику пустого поля и  Esc
  function removeClassOpenMenu() {
    let menuItems = document.querySelectorAll(".site-list__item");
    menuItems.forEach(function (element) {
      element.classList.remove("__show_dropdown_sub");
    });
  }
  function closeSubMenu() {
    window.addEventListener("click", function (event) {
      if (!event.target.closest(".__show_dropdown_sub")) {
        removeClassOpenMenu();
      }
    });
  }

  // sub-menu for uslugi in main menu  - открытие на имобилке и таблетке

  if(window.innerWidth <= 768){
    let menuItems = document.querySelectorAll(".site-list__item")
    menuItems.forEach(function(el){
        el.addEventListener('click', function(e){
            if(el.querySelector('.sub-menu__ikon-wrapper') || el.querySelector('sub-menu__ikon')){
              if(e.target.classList.contains('sub-menu__ikon-wrapper')
              || e.target.classList.contains('sub-menu__ikon')
              || e.target.tagName == 'use'){
                el.classList.toggle('__show_dropdown_sub')
              }
            }

        })
    })
    closeSubMenu();
    document.addEventListener("keydown", function (event) {
      if (event.code == "Escape") {
        removeClassOpenMenu();
      }
    });

  }

    // АНИМАЦИЮ СИРЕНВУЮ ДОБАВИТЬ!СКРИПТ
    function maskPhone(selector, masked = '+7(___)___-__-__') {
      const elems = document.querySelectorAll(selector);

      function mask(event) {
        const keyCode = event.keyCode;
        const template = masked,
          def = template.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
        let i = 0,
          newValue = template.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = newValue.indexOf("_");
        if (i !== -1) {
          newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, this.value.length).replace(/_+/g,
          function (a) {
            return "\\d{1," + a.length + "}";
          }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
          this.value = newValue;
        }
        if (event.type === "blur" && this.value.length < 5) {
          this.value = "";
        }

      }

      for (const elem of elems) {
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
      }

    }
    maskPhone('.phone__mask');

});
// маска телефона

// ее нет - она в index
// конец







// Класс  main-nav__toggle- -closed по умолчанию,- мобильное меню закрыто, для его
// открытия нужно нажать на кнопку бургера, для закрытия тоже нажать на крестик
// Переменные для открытия и закрытия верхнего меню в мобилке

let mainNavToggle = document.querySelector(".main-nav__toggle");
let listToggle = document.querySelector(".main-nav__list");
let logoToggle = document.querySelector(".page-header__logo");

// действия по умолчанию -Если есть JS, то лишние классы ниже убираются,
// добавляется -конкретно класс закрытого меню - и у нас грузится страница, со спрятанным меню

mainNavToggle.classList.remove("main-nav__toggle--nojs");
mainNavToggle.classList.remove("main-nav__toggle--closed");
listToggle.classList.add("site-list--closed");
logoToggle.classList.remove("page-header__logo--mobile");

// Открываем и закрываем меню в мобильной версии

mainNavToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  mainNavToggle.classList.toggle("main-nav__toggle--closed");
  listToggle.classList.toggle("site-list--closed");
  logoToggle.classList.toggle("page-header__logo--mobile");
});

// // кнопка наверх в мобилке при скроле окна на 800px появляется, а если меньше - исчезает, таблетке и десктопе не исчезает
// let button = document.querySelector(".button-up");

// window.addEventListener("scroll", function(){
//   if (window.pageYOffset > 800) {
//     button.classList.add( 'button-up--visible' );
//     // button.classList.remove('button-up--hiden');
//   } else if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     // button.classList.add('button-up--hiden');
//     button.classList.remove( 'button-up--visible' );
//   }
// });


// Новый код кнопка наверх в мобилке при скроле окна на 800px появляется, а если меньше - исчезает, при этом коде !!! НЕ ИСЧЕЗАЕТ!!!
// else if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) - на десктопе!!!!!!!!!

// Новый код кнопка наверх -КОНЕЦ

// Ищем поля, чб фокус устанавливался автоматически

let feedbackForm = document.querySelector("#feedback-form");
let feedbackName = document.querySelector("#name");
let feedbackSurname = document.querySelector("#surname");
let feedbackTel = document.querySelector("#tel");
let feedbackEmail = document.querySelector("#email");
let feedbackField = document.querySelector("#feedback");

// Записываем в локальное хранилище данные

let storageName = localStorage.getItem("name");
let storageSurname = localStorage.getItem("surname");
let storageTel = localStorage.getItem("tel");
let storageEmail = localStorage.getItem("email");

if (feedbackName) {
  feedbackName.focus();
}

// Получается, что атрибут input.getAttribute('value') хранит оригинальное (исходное) значение даже после того, как пользователь заполнил поле и свойство изменилось.

// Например, можно взять изначальное значение из атрибута и сравнить со свойством, чтобы узнать, изменилось ли значение.
//  А при необходимости и перезаписать свойство атрибутом, отменив изменения.

// Слайдер с отзывами
let sliderBtnttonNext = document.querySelector(".reviews__next");
let sliderBtnttonPrev = document.querySelector(".reviews__prev");
if(sliderBtnttonNext && sliderBtnttonPrev){
let sliderInputs = document.querySelectorAll(".reviews__input");
// псевдомассив sliderInputs  и его длинна sliderInputs.length
let numbersSliderInputs = sliderInputs.length;

sliderBtnttonNext.addEventListener("click", setNextSlide);
sliderBtnttonPrev.addEventListener("click", setPrevSlide);

  function setNextSlide() {
    let currentSlide = getCurrentSlide();
    // Это надо коммент!!!!
    let nextSlide;
    if (currentSlide + 1 === numbersSliderInputs) {
      nextSlide = 0;
    } else {
      nextSlide = currentSlide + 1;
    }
    sliderInputs[nextSlide].checked = true;
  }

  function setPrevSlide() {
    let currentSlide = getCurrentSlide();
    // индекс следующего слайда, который будем показывать
    let nextSlide;
    if (currentSlide === 0) {
      // если первый слайд нашли индекс 0, то переходим на последний (3) numbersSliderInputs -все количестов -1 = 2 - индекс последнего слайда
      nextSlide = numbersSliderInputs - 1;
    } else {
      // если это не последний слайд, например 2, то переходим на первый
      nextSlide = currentSlide - 1;
    }
    sliderInputs[nextSlide].checked = true;
  }
  // Как получаем .checked???????????????мы же на input click, а не на button
  function getCurrentSlide() {
    for (let i = 0; i < numbersSliderInputs; i++) {
      if (sliderInputs[i].checked) {
        return i;
      }
    }
  }

}

// chat
window.addEventListener('load', function(){
  if(window.innerWidth <= 767){
    let chat = document.querySelector ('.chat__list');
    let chatTogle = document.querySelector ('.chat__btn-toggle--open');
    let chatClouse = document.querySelector ('.chat__btn-toggle--clouse');

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
