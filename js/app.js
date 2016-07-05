document.addEventListener("DOMContentLoaded", function(){



// ----- Hide Element ----- 
var bgTransparent = document.querySelectorAll('.bg-transparent');
	for (var i = 0; i < bgTransparent.length; i++) {
		bgTransparent[i].addEventListener('mouseover', function(hideElement) { 
			this.style.display = 'none';
		});
	}









//****************************************
});