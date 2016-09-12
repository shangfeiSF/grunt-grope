/*
 * forin
 * http://jshint.com/docs/options/#forin
 * This option requires all for in loops to filter object's items.
 * */
function forin() {
  var obj = {
    'name': 'grunt',
    'version': 1
  };
  
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

forin();