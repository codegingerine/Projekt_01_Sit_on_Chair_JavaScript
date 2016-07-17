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
		
		/*DO POPRAWY - 	przy kliknięciu w kolejną strzałke rozwijają się też listy ul powyżej
		// Hide category list on clicking a chosen category item inside the list 
		for (var i = 0; i < categories.length; i++) {
			categories[i].addEventListener('click', function(hide) {
				this.parentElement.style.display = 'none';
			});	
		};*/
	};
	categoriesLists();


	// category form
	var listArrow = document.querySelectorAll(".list_arrow");
	// price table - names
	var chair = document.querySelector(".title");
	var color = document.querySelector(".color");
	var pattern = document.querySelector(".pattern");
	var transport = document.querySelector(".transport");
	// price table - values
	var chairValue = document.querySelector(".title.value");
	var colorValue = document.querySelector(".color.value");
	var patternValue = document.querySelector(".pattern.value");
	var transportValue = document.querySelector(".transport.value");
	// price table - total price
	var sumLabel = document.querySelector(".sum_label");
	var sumDiv = document.querySelector(".sum strong");
	// checkbox
	// var checkbox = document.querySelector(".checkbox");
	var checkboxInput = document.querySelector("#transport");
	var checkboxLabel = document.querySelector(".checkbox.check-box label");

	// chair prices - dataset created
	categories[0].dataset.price = 50;
	categories[1].dataset.price = 200;
	categories[2].dataset.price = 400;
	// color prices - dataset created
	categories[3].dataset.price = 50;
	categories[4].dataset.price = 100;
	categories[5].dataset.price = 200;
	// pattern prices - dataset created
	categories[6].dataset.price = 50;
	categories[7].dataset.price = 300;
	// transport price - dataset created
	checkboxInput.dataset.price = 200;

	var sum = 0;
	var chairPrice = 0;
	var colorPrice = 0;
	var patternPrice = 0;
	var transportPrice = 0;


	//VERSION 1
	function endPrices() {
		for (var i = 0; i < categories.length; i++) {
			categories[i].addEventListener("click", function(event){
				// place the chosen category as a listLabel
				var listLabel = this.parentElement.previousElementSibling.previousElementSibling;
				listLabel.innerHTML = this.innerHTML;
				listLabel.style.color = "#e6005c";
				// place the chosen chair price in price table
				if (this === categories[0] || this === categories[1] || this === categories[2] ) {
					chair.innerHTML = this.innerHTML;    // category name placed in price table  
					chairPrice = parseInt(this.dataset.price, 10);
					chairValue.innerHTML = chairPrice + ' pln';	// category price placed in price table 
				};
				// place the chosen color price in price table
				if (this === categories[3] || this === categories[4] || this === categories[5] ) {
					color.innerHTML = this.innerHTML;   
					colorPrice = parseInt(this.dataset.price, 10);	  			
					colorValue.innerHTML = colorPrice + ' pln'; 
				};
				// place the chosen pattern price in price table
				if (this === categories[6] || this === categories[7]) {
					pattern.innerHTML = this.innerHTML;   
					patternPrice = parseInt(this.dataset.price, 10);	  			
					patternValue.innerHTML = patternPrice + ' pln'; 
				};
				// checkbox - place transport price in price table if checked + total price
				checkboxInput.addEventListener("click", function(event) {
					if (checkboxInput.checked === true) {
							transport.innerHTML = checkboxLabel.innerHTML;   
							transportPrice = parseInt(this.dataset.price, 10);  			
							transportValue.innerHTML = transportPrice + ' pln'; 
					} else {
		                transport.innerHTML = "";
		           		transportValue.innerHTML = "";
		       			transportPrice = 0;
		        	};
		        	// total price if checkbox checked
		        	sum = chairPrice + colorPrice + patternPrice + transportPrice;
					sumDiv.innerHTML = sum + ' pln';
        		});
				// total price in price table if checkbox not checked
				sum = chairPrice + colorPrice + patternPrice;
				sumDiv.innerHTML = sum + ' pln';
			});
		};
	};
	endPrices();

/*
	//VERSION 2
	function endPrices() {
		for (var i = 0; i < categories.length; i++) {	
	        categories[i].addEventListener("click", function(event) {
				// place chosen category as a listLabel
				var listLabel = this.parentElement.previousElementSibling.previousElementSibling;
				listLabel.innerHTML = this.innerHTML;
				listLabel.style.color = "#e6005c";		
			});		
			// place the chosen chair price in price table + total price
			if (i<=2) {
	        	categories[i].addEventListener("click", function(event) {
					chair.innerHTML = this.innerHTML;    // category name placed in price table  
					chairPrice = parseInt(this.dataset.price, 10);
					chairValue.innerHTML = chairPrice + ' pln';	// category price placed in price table
					sumDiv.innerHTML = chairPrice  + ' pln';
				});	
			// place the chosen color price in price table + total price
	       	} if (i>2 && i <= 5)	{
	         	categories[i].addEventListener("click", function(event) {
					color.innerHTML = this.innerHTML;   
					colorPrice = parseInt(this.dataset.price, 10);	  			
					colorValue.innerHTML = colorPrice + ' pln'; 
					sumDiv.innerHTML = chairPrice + colorPrice + ' pln';
	    		});	      
			// place the chosen pattern price in price table + total price		
	       	} else if (i>5 && i <= 7) {
	       		categories[i].addEventListener("click", function(event) {
					pattern.innerHTML = this.innerHTML;   
					patternPrice = parseInt(this.dataset.price, 10);	  			
					patternValue.innerHTML = patternPrice + ' pln'; 
					sumDiv.innerHTML = chairPrice + colorPrice + patternPrice + ' pln';
	    		});	 
	       	}
			// checkbox - place transport price in price table if checked
			checkboxInput.addEventListener("click", function(event) {
				if (checkboxInput.checked === true) {
					transport.innerHTML = checkboxLabel.innerHTML;   
					transportPrice = parseInt(this.dataset.price, 10);	  			
					transportValue.innerHTML = transportPrice + ' pln'; 
				} 
				else {
	                transport.innerHTML = "";
	           		transportValue.innerHTML = "";
	       			transportPrice = 0;
	        	};
	        	// total price in price table if checked
	        	sum = chairPrice + colorPrice + patternPrice + transportPrice;
				sumDiv.innerHTML = sum + ' pln';
        	});	
		};
	};
	endPrices();
*/







});