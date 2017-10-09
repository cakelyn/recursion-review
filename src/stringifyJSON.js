// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (obj === true) {
    return 'true';
  }
  if (obj === false) {
    return 'false';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var arr = [];
    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr.join(',') + ']';
  }
  if (typeof obj === 'object') {
    var tempObj = [];
    for (var key in obj) {
      tempObj.push( stringifyJSON(obj[key]) );
    }
    return '{}';
  }

};
