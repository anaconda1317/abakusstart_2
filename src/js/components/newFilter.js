document.addEventListener('DOMContentLoaded', (event) => {
    const listFilter = document.querySelector('.__filter');
    const elementFilter = listFilter.querySelectorAll('.dropdown__menu-item');
    if(listFilter){
        const elementNews = document.querySelectorAll('.newsdrop__item');
        const currentValueFilter = document.querySelector('.dropdown__toggle-current')
        elementFilter.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.currentTarget.hasAttribute('data-dropdown-value')) {
              let dataValue = e.currentTarget.getAttribute('data-dropdown-value');
              let nameValue = e.target.closest('.dropdown__menu-text');
        
              elementNews.forEach( (item => {
                  if(item.getAttribute('data-category') !== dataValue && dataValue !== 'all'){
                    item.style.display = 'none';
                  }else{
                    item.style.display = '';
                    currentValueFilter.textContent = nameValue.textContent;
                  }
                  if(dataValue === 'all') {
                    item.style.display = '';
                  }
                  listFilter.classList.remove('__show');
              }))
         
            }
          })
        })
    }
   

  })