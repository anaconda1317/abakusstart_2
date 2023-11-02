const btnOpenDropdawn = document.querySelector('.dropdown__toggle-button');
const filter = document.querySelector('.__filter');
if(btnOpenDropdawn && filter){
    const filterItems = document.querySelectorAll('.dropdown__menu-item')
    btnOpenDropdawn.addEventListener('click', (e) => {
        e.preventDefault();
        filter.classList.toggle('__show');
    })
}
// .__hidden {
//   display:none;
// }


// __dropdown-menu-open {  /* Добавляем класс и меню показывается */
//   display: block;
// }


// .__show {
//   display: block;
// }


// document.querySelector
// __trigger
// // Получаем кнопку и меню 
//  var button = document.querySelector(".__trigger");
// var button = document.querySelector(".dropdown__toggle-button");
// var menu = document.querySelector(".dropdown__menu");

// // Добавляем обработчик клика на кнопку
// button.addEventListener("click", function () {
//   // Переключаем класс __hidden для меню при каждом клике
//   menu.classList.toggle("__hidden");
//   <!-- menu.classList.toggle("__dropdown-menu-open "); -->
  
//   // Обновляем атрибут aria-expanded для кнопки
//   var expanded = menu.classList.contains("__hidden") ? "false" : "true";
//   button.setAttribute("aria-expanded", expanded);
// });




// // Получаем кнопку и меню по их id
// var button = document.getElementById("dropdownMenuButton");
// var menu = document.getElementById("dropdownMenu");

// // Добавляем обработчик клика на кнопку
// button.addEventListener("click", function () {
//   // Переключаем класс __hidden для меню при каждом клике
//   menu.classList.toggle("__hidden");
  
//   // Обновляем атрибут aria-expanded для кнопки
//   var expanded = menu.classList.contains("__hidden") ? "false" : "true";
//   button.setAttribute("aria-expanded", expanded);
// });



