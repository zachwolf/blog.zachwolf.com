require(["assets/js/query.js"], function($){

	/*
	 * Enclose functions, check for elements, return if there aren't any.
	 */

	(function(){

		/**
		 * 
		 */

		var $stickyEls = $('[data-js="sticky"]');

		if ( _.isEmpty( $stickyEls ) ) {
			return;
		}

		require(["assets/js/scrollspy.js"], function( spy ){
			if ( !spy ) {
				console.log("no spy. spy: ", spy);
				return;
			}

			var toggled = false;

			spy.addSpy({
				test: function(event){
					return window.scrollY > 100;
				},
				yeah: function(e){
					if (toggled) {
						return;
					}
					toggled = true;
					$stickyEls[0].classList.add("nav--skinny");
					$stickyEls[0].classList.remove("nav--fat-a-f");
				},
				no: function(e){
					if (!toggled) {
						return;
					}
					toggled = false;
					$stickyEls[0].classList.add("nav--fat-a-f");
					$stickyEls[0].classList.remove("nav--skinny");
					console.log($stickyEls);
				}
			});
		});

		console.log("load header scripts");

	}());



});