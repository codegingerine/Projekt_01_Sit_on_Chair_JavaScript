document.addEventListener("DOMContentLoaded", function(){


// ----- Show Element - DropDown menu -----
var listElementsVisible = document.querySelectorAll('nav ol > li');

	for (var i=0; i < listElementsVisible.length; i++) {
		listElementsVisible[i].addEventListener('mouseover', function(show) {
			this.firstElementChild.nextElementSibling.style.display = 'block';
		});

		listElementsVisible[i].addEventListener('mouseout', function(hide) {
			this.firstElementChild.nextElementSibling.style.display = 'none';
		});
	}

// ----- Slider -----
var nextSlaidBtn = document.querySelector('.slider-btn-right');
var sliderPhotos = document.querySelectorAll('.slider-photo li');
var prevSlideBtn = document.querySelector('.slider-btn-left');

var index = 0;
sliderPhotos[index].classList.add('visible'); 
	nextSlaidBtn.addEventListener("click", function(event) {
		sliderPhotos[index].classList.remove('visible');

		if (index === sliderPhotos.length-1) {
			index = 0;
		} else {
			index++;
		}
		sliderPhotos[index].classList.add('visible');
		});

	prevSlideBtn.addEventListener("click", function(event) {
	sliderPhotos[index].classList.remove('visible');

		if (index === 0) {
			index = sliderPhotos.length-1;
		} else {
			index--;
		}
	sliderPhotos[index].classList.add('visible');
	});

// ----- Hide Element ----- 
var bgTransparent = document.querySelectorAll('.bg-transparent');
	for (var i = 0; i < bgTransparent.length; i++) {
		bgTransparent[i].addEventListener('mouseover', function(hideElement) { 
			this.style.display = 'none';
		});
	}


// ----- Application options ----- 

var appArrows = document.querySelectorAll('.list_arrow');
// console.log(appArrows);

//v1 po dodaniu drugiegi eventu, nic nie działa
	for (var i = 0; i < appArrows.length; i++) {
		appArrows[i].addEventListener('click', function(show) {
			this.nextElementSibling.style.display = 'block';	
		});

		// appArrows[i].addEventListener('click', function(hide) {
		// 	this.nextElementSibling.style.display = 'none';
		// });	

	}	


//v 2 - tylko jeden element reaguje na oba eventy

	// for (var i = 0; i < appArrows.length; i++) {
	// 	appArrows[i].addEventListener('click', function(show) {
	// 		this.nextElementSibling.style.display = 'block';	

	// 		for (var i = 0; i < appArrows.length; i++) {
	// 			appArrows[i].addEventListener('click', function(hide) {
	// 				this.nextElementSibling.style.display = 'none';
	// 			});	
	// 		}		
		
	// 	});
	// }	


// v.3 drugi event nie działa

	// for (var i = 0; i < appArrows.length; i++) {
	// 	appArrows[i].addEventListener('click', function(show) {
	// 		if (this.nextElementSibling.style.display = 'none') {
	// 		this.nextElementSibling.style.display = 'block';
	// 		} else {
	// 			this.nextElementSibling.style.display = 'none';
	// 		}
	// 	});
	// }	



	



});