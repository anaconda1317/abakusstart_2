// preloader
window.addEventListener('load', function () {
  // Добавить класс "loaded" к body после загрузки страницы
  this.setTimeout(()=>{
    document.body.classList.add('loaded');

  },5000);
});

// window.onload
// Событие load на объекте window наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы. Это событие доступно через свойство onload.

// В примере ниже правильно показаны размеры картинки, потому что window.onload дожидается всех изображений: