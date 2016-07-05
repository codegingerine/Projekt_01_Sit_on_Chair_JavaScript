document.addEventListener("DOMContentLoaded", function(){


// ----- Show Element - DropDown menu -----
var dropDownMenu = document.querySelectorAll('nav ol > li > ul');
console.log(dropDownMenu);
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









//****************************************
});