

// sub-menu задержка на 15 сек

document.addEventListener("DOMContentLoaded", function () {
    // получаем все элементы которые имеют сабменю
    const itemsHasSubmenu = document.querySelectorAll('.site-list__item--has-children');
    if ( itemsHasSubmenu.length > 0 ) {
        Array.from(itemsHasSubmenu).forEach( (item) => {
            if(window.innerWidth <= 768){
                const btnOpenSubmnuOnMobile = item.querySelector('.sub-menu__ikon-wrapper')
                if ( btnOpenSubmnuOnMobile ) {
                    btnOpenSubmnuOnMobile.addEventListener('click', function (e) {
                        e.preventDefault
                        let toggleChange = false;
                        if(btnOpenSubmnuOnMobile.classList.contains('__animation')){
                            toggleChange = true
                        }else{
                            toggleChange = false
                        }
                        btnOpenSubmnuOnMobile.classList.toggle('__animation');
                        fadeInItems(0, false, toggleChange);
                    });
                }
                
            }else{
                // слушаем события клика по данной кнопке
                item.addEventListener('mouseenter', function (e) {
                    e.preventDefault
                    fadeInItems(0);
                });
                item.addEventListener('mouseleave', function (e) {
                console.log(e);
                e.preventDefault
                fadeInItems(0, true);
                });
            }
        });
    }
    
    function fadeInItems(index, hide = false, viewAnimationOnMobile = false) {
        const menuItems = document.querySelectorAll(".sub-menu__item");
        if(!hide && !viewAnimationOnMobile){
            if (index < menuItems.length) {
                setTimeout(function () {
                    menuItems[index].style.opacity = "1";
                    fadeInItems(index + 1);
                }, 150); // Задержка в 0.15 секунд
            }
        }
        if(hide || viewAnimationOnMobile){
            if (index < menuItems.length) {
                menuItems.forEach((el) => {
                    el.style.opacity = "0";
                }) 
            }
        }
        
    }

   
});