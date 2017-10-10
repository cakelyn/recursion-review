// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {

var result = [];

var node = node || document.body;

// check for className
if ((node.nodeType === 1) && node.classList.contains(className)) {
  result.push(node);
}
//check document body for child nodes
if (node.hasChildNodes()) {
  //if yes, loop through and check those nodes for child
  for (var i = 0; i < node.childNodes.length; i++) {
    result = result.concat(getElementsByClassName(className, node.childNodes[i]));
  }
}

return result;

};
