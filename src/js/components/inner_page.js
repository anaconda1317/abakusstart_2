let items = document.querySelectorAll('.carousel .carousel__item');
let wrapperSlider = document.querySelector('.carousel__wrapper');
let currentItem = 0;
let isEnabled = true;
// function setCountNavigation(cnt, wrap){
// 	if(wrap.length > 0){
// 		wrap.forEach(function(item){
// 			var sliderNavigationElements = item.querySelectorAll('.carousel__navigation-item');
// 			resetStatusElements(sliderNavigationElements, 'carousel__navigation-link--active');
// 			sliderNavigationElements[cnt].classList.add('active');
// 		})

// 	}
// }
// function changeCurrentItem(n) {
// 	currentItem = (n + items.length) % items.length;
// 	setCountNavigation(currentItem, wrapperSlider)
// }
// function resetStatusElements(currentItems, activeClass){
// 	if(currentItems.length > 0){
// 		currentItems.forEach(function(el){
// 			el.classList.remove(activeClass);
// 	   })
// 	}
// }


// function hideItem(direction) {
// 	isEnabled = false;
// 	items[currentItem].classList.add(direction);
// 	items[currentItem].addEventListener('animationend', function() {
// 		this.classList.remove('active', direction);
// 	});

// }

// function showItem(direction) {
// 	items[currentItem].classList.add('next', direction);
// 	items[currentItem].addEventListener('animationend', function() {
// 		this.classList.remove('next', direction);
// 		this.classList.add('active');
// 		isEnabled = true;
// 	});
// }

// function nextItem(n) {
// 	hideItem('to-left');
// 	changeCurrentItem(n + 1);
// 	showItem('from-right');
// }

// function previousItem(n) {
// 	hideItem('to-right');
// 	changeCurrentItem(n - 1);
// 	showItem('from-left');
// }
// function nextItemClick(){
// 	if (isEnabled) {
// 		items.forEach(function(el){
// 			if(el.querySelector('.active')){
// 				el.classList.remove('active')
// 			}
// 			el.removeEventListener('animationend', hideItem);
// 			el.removeEventListener('animationend', showItem);
// 		})
// 		previousItem(currentItem);

// 	}
// }
// function prevItemClick(){
// 	if (isEnabled) {
// 		items.forEach(function(el){
// 			if(el.querySelector('.active')){
// 				el.classList.remove('active')
// 			}
// 			el.removeEventListener('animationend', hideItem);
// 			el.removeEventListener('animationend', showItem);
// 		})
// 		nextItem(currentItem);
// 		 // после клика удаляем его
// 	}
// }
// if(document.querySelector('.carousel__control.left') ){
//   document.querySelector('.carousel__control.left').addEventListener('click',  nextItemClick);

// }
// if(document.querySelector('.carousel__control.left')){
//   document.querySelector('.carousel__control.right').addEventListener('click', prevItemClick);

// }


// функция отслеживает состояние свайпа
// const swipedetect = function(el) {

// 	let surface = el;
//   if(!surface) return;

// 	let startX = 0;
// 	let startY = 0;
// 	let distX = 0;
// 	let distY = 0;
// 	let startTime = 0;
// 	let elapsedTime = 0;

// 	let threshold = 150;
// 	let restraint = 100;
// 	let allowedTime = 300;

// 	surface.addEventListener('mousedown', function(e){
// 		startX = e.pageX;
// 		startY = e.pageY;
// 		startTime = new Date().getTime();
// 		e.preventDefault();
// 	}, false);

// 	surface.addEventListener('mouseup', function(e){
// 		distX = e.pageX - startX;
// 		distY = e.pageY - startY;
// 		elapsedTime = new Date().getTime() - startTime;
// 		if (elapsedTime <= allowedTime){
// 			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
// 				if ((distX > 0)) {
// 					if (isEnabled) {
// 						previousItem(currentItem);
// 					}
// 				} else {
// 					if (isEnabled) {
// 						nextItem(currentItem);
// 					}
// 				}
// 			}
// 		}
// 		e.preventDefault();
// 	}, false);

// 	surface.addEventListener('touchstart', function(e){
// 		if (e.target.classList.contains('carousel__arrow') || e.target.classList.contains('carousel__control')) {
// 			if (e.target.classList.contains('left')) {
// 				if (isEnabled) {
// 					previousItem(currentItem);
// 				}
// 			} else {
// 				if (isEnabled) {
// 					nextItem(currentItem);
// 				}
// 			}
// 		}
// 			var touchobj = e.changedTouches[0];
// 			startX = touchobj.pageX;
// 			startY = touchobj.pageY;
// 			startTime = new Date().getTime();
// 			// e.preventDefault();
// 	}, false);

// 	surface.addEventListener('touchmove', function(e){
// 			e.preventDefault();
// 	}, false);

// 	surface.addEventListener('touchend', function(e){
// 			var touchobj = e.changedTouches[0];
// 			distX = touchobj.pageX - startX;
// 			distY = touchobj.pageY - startY;
// 			elapsedTime = new Date().getTime() - startTime;
// 			if (elapsedTime <= allowedTime){
// 					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
// 							if ((distX > 0)) {
// 								if (isEnabled) {
// 									previousItem(currentItem);
// 								}
// 							} else {
// 								if (isEnabled) {
// 									nextItem(currentItem);
// 								}
// 							}
// 					}
// 			}
// 			e.preventDefault();
// 	}, false);
// }


// function getNavigationSlider(){
// 	if(wrapperSlider){
// 			var sliderElements = wrapperSlider.querySelectorAll('.carousel__item')
// 			var slider = wrapperSlider.querySelector('.carousel')
// 			var sliderNavigationElements = wrapperSlider.querySelectorAll('.carousel__navigation-item')
// 			sliderNavigationElements.forEach(function(item, key, itemsNavigation){
// 				item.addEventListener('click', function(e){
// 					e.preventDefault();
// 					if(sliderElements[key]){


// 						resetStatusElements(itemsNavigation, 'carousel__navigation-link--active');
// 						// resetStatusElements(sliderElements, 'active');
// 						currentItem = key
// 						if(slider.querySelector('.active')){
// 							slider.querySelector('.active').classList.remove('active')
// 						}
// 						// nextItem(key)
// 						// previousItem(key)
// 						// sliderElements[key].classList.add('active');
// 						item.classList.add('active');
// 					}


// 				});
// 				sliderElements[key].removeEventListener('animationend', hideItem);
// 				sliderElements[key].removeEventListener('animationend', showItem);
// 			})


// 	}
// }

// getNavigationSlider();
// var el = document.querySelector('.carousel');
// swipedetect(el);

// slaider carusel отзывы end



