// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // take the json
  // loop through the string to read every character
  // test the first character to see if bracket
  // if it is it's an array
  // look for closing bracket
  var result;

  if (json[0] === '[') {
      result = [];
      for (var i = 1; i < json.length-1; i++) {
        result.push(json[i]);
    }
  }

  if (json[0] === '{') {
    result = {};
    var key = '';
    var value = '';
    var colon = json.indexOf(':');

    // left side is key
    for (var j = 1; j < colon; j++) {
      key = key.concat(json[j]);
    }

    // right side is value
    for (var k = colon+2; k < json.length-1; k++) {
      value = value.concat(json[k]);
    }

    if (value === "\"\"") {
      value = "";
    }

    result[key] = value;
  }

  return result;
};


