define(["assets/js/underscore.js"], function(_){

  var doc = document;

  var DOM = function( selector ) {
    var list = doc.querySelectorAll( selector );
        arr  = [];

    _.each( list, function( value, key ) {
      arr.push( value );
    });

    return arr;
  };

  var addProp = function( name, fn ) {
    DOM.prototype[name] = fn;
  };

  addProp("addClass", function() {
    console.log("add class called");
  });

  /*DOM.prototype = _.extend({}, DOM.prototype, {
    addProp: function( name, fn ) {

    }
  });*/

  // return new DOM();

  /*
  DOM(".foo").removeClass("foo").addClass("bar");
  */

  return DOM;

  /*return function( selector, context ) {
    context = context || document;

    return {
      all: function () {
        var list = context.querySelectorAll( selector );
            arr  = [];

        _.each( list, function( value, key ) {
          arr.push( value );
        });

        return arr;
      },
      first: function () {
        return context.querySelector( selector );
      },
      last: function () {
        var list = context.querySelectorAll( selector );
        return list.length > 0 ? list[ list.length - 1 ] : null;
      }
    };

  };*/

});