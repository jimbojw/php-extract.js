/**
 * extract.js - implements a PHP-esque extract() function for JavaScript.
 */
var extract = function(obj) {
  var k, v, mess;
  v = ('_' + Math.random()).replace(/\./g, '');
  mess = 'var ' + v + '=(function(){return this;})();';
  (function(){ this[v] = obj; })();
  for (k in obj) {
    if (obj.hasOwnProperty(k) && (/^[$a-z_][$_a-z0-9]*$/i).test(k)) {
      mess += 'try{var ' + k + '=' + v + '.' + v + '[' + JSON.stringify(k) + ']}catch(err){};';
    }
  }
  return mess + 'delete ' + v + '.' + v + ';delete ' + v + ';';
};
if (typeof module === 'object') {
  module.exports = extract;
}
