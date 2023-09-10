document.addEventListener('DOMContentLoaded', ()=>{
    if(document.body.hasAttribute('data-page')){
        const dataPageBody = document.body.getAttribute('data-page');
        const menuItems = document.querySelectorAll('li[data-link-item]');
        menuItems.forEach( el => {
            el.querySelector('a').classList.remove('site-list__link--active')
            el.classList.remove('site-list__link--active')
           if ( el.getAttribute('data-link-item').includes(dataPageBody) ){ 
                el.classList.add('site-list__link--active')
           }
        });
    }
    
})