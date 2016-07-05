document.addEventListener("DOMContentLoaded", function(){


// ----- Slider -----

var nextSlaidBtn = document.querySelector('.slider-btn-right');
var sliderPhotos = document.querySelectorAll('.slider-photo li');
var prevSlideBtn = document.querySelector('.slider-btn-left');

var index = 0;
	sliderPhotos[index].classList.add('visible'); 
	nextSlaidBtn.addEventListener("click", function(event) {
		var counter = 0;
		var counterValue = counter + 1;      
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

// ----- Show Element - DropDown menu -----
var dropDownMenu = document.querySelectorAll('nav ol > li > ul');
	for (var i = 0; i < dropDownMenu.length; i++) {
		dropDownMenu[i].addEventListener('mouseup', function(showElement) { 
			this.style.display = 'block';
		});
	}	

// ----- Hide Element ----- 
var bgTransparent = document.querySelectorAll('.bg-transparent');
	for (var i = 0; i < bgTransparent.length; i++) {
		bgTransparent[i].addEventListener('mouseover', function(hideElement) { 
			this.style.display = 'none';
		});
	}

});