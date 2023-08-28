// Получаем элементы, с которыми будем работать
const smallHeadline = document.querySelectorAll('.main-article__small-headline');
const hideObject = document.querySelectorAll('.main-article__small-headline._hide-object');
const showClass = '_show-object';
const hideClass = '_hide-object';

// Функция для проверки, находится ли элемент в зоне видимости
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки события прокрутки
function handleScroll() {
    smallHeadline.forEach((el, key)=>{
        if (isElementInViewport(hideObject[key])) {
            el.classList.add(showClass);
            el.classList.remove(hideClass);
        } else {
            el.classList.remove(showClass);
            el.classList.add(hideClass);
        }
    })
   
}

// Навешиваем обработчик события прокрутки на объект window
window.addEventListener('scroll', handleScroll);

// Вызываем функцию при загрузке страницы, чтобы определить начальное состояние
handleScroll();