document.addEventListener("DOMContentLoaded", function(){


	// ----- DropDown menu - Show/Hide Element -----
	var listElementsVisible = document.querySelectorAll('nav ol > li');

	function DropdownMenu() {
		for (var i=0; i < listElementsVisible.length; i++) {
			listElementsVisible[i].addEventListener('mouseover', function(show) {
				this.firstElementChild.nextElementSibling.style.display = 'block'; //embedded ul visible
			});
			listElementsVisible[i].addEventListener('mouseout', function(hide) {
				this.firstElementChild.nextElementSibling.style.display = 'none'; //embedded ul back to invisible
			});
		};
	};
	DropdownMenu();

	// ----- Section Slider -----
	var nextSlaidBtn = document.querySelector('.slider-btn-right');
	var sliderPhotos = document.querySelectorAll('.slider-photo li');
	var prevSlideBtn = document.querySelector('.slider-btn-left');

	function mainSlider() {
		var index = 0;
		sliderPhotos[index].classList.add('visible'); 
			nextSlaidBtn.addEventListener("click", function(event) {
				sliderPhotos[index].classList.remove('visible');
				if (index === sliderPhotos.length-1) {
					index = 0;
				} else {
					index++;
				};
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
	};
	mainSlider();

	// ----- Section Offer - Hide title bars ----- 
	var bgTransparent = document.querySelectorAll('.bg-transparent');	//transparent bars with box title

	function titleBarsHide() {
		for (var i = 0; i < bgTransparent.length; i++) {
			bgTransparent[i].addEventListener('mouseover', function(hideElement) { 
				this.style.display = 'none';
			});
		};
	};
	titleBarsHide();

	// ----- Section Buy Chair Form ----- 
	var appArrows = document.querySelectorAll('.list_arrow');
	var categories = document.querySelectorAll(".list_panel li"); //li categories
	console.log(categories)

	// Category DropDown Lists 
	function categoriesLists() {
		for (var i = 0; i < appArrows.length; i++) {
			// Show category list on arrow click
			appArrows[i].addEventListener('click', function(show) { 
				var list = this.nextElementSibling; 		// ul - category list, cache element	
				list.style.display = 'block';	
				// Hide category list on arrow click
				for (var i = 0; i < appArrows.length; i++) {
					appArrows[i].addEventListener('click', function(hide) {
				   		if ( list.style.display != 'none' &&  list.style.display != "") { 
				   			list.style.display = 'none';
				   		} else {
				   			list.style.display = 'block';
				   		};
					});
				};
			});
		};
		// Hide category list on clicking a chosen category item inside the list 
		for (var i = 0; i < categories.length; i++) {
			categories[i].addEventListener('click', function(hide) {
				this.parentElement.style.display = 'none';
			});	
		};
	};
	categoriesLists();




});