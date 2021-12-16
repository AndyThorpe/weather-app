   


	
	window.onload = function() {

		// assign current class to first step
  		document.getElementsByClassName('container')[0].firstChild.className += " current"
  		//_addEventListeners();
  		


	};


	// function _addEventListeners() {

	// 	var current = document.getElementsByClassName("current")[0];

	// 	var classname = document.getElementsByClassName("teamSelect");
	// 		for(var i = 0; i < classname.length; i++){
	// 			classname[i].addEventListener('click', function() {
	// 				console.log(this.dataset.value);
	// 				console.log(this.dataset.id);
	// 				console.log(this.parentElement);


	// 				var parent = this.parentElement;

	// 				parent.nextElementSibling.classList.add("current")

	// 				parent.classList.remove("current");

	// 			}, false);
	// 	}
 //   }





   function _toggleDisplay(selector) {
      var e = document.querySelector(selector);
      if (e.hasClass("current") === true) {
        e.removeClass('current');
      } else {
      }
    }





 



