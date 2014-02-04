define(["assets/js/query.js", "assets/js/underscore.js"], function($, _){

	var spys = [],
			id   = 0,
			loop = function(event){
				if ( _.isEmpty( spys ) ) {
					return;
				}

				_.each(spys, function(spy){
					// console.log(spy);
					if (spy.test(event)) {
						spy.yeah(event);
					} else {
						spy.no(event);
					}
				});
			};

	window.addEventListener("scroll", function(event){
		loop(event);
	});


	return {
		addSpy: function(info){
			id = id + 1;

			spys[id] = info;

			return id;
		},
		removeSpy: function(id){
			debugger;
			// remove from array
		}
	};
});