
var extract = require('./extract.js');

exports.testExtract = function(test) {
  
  test.expect(3);
  
  test.equals(typeof foo, 'undefined', 'foo should be undefined initially');
  
  var obj = { foo: {} };
  
  eval(extract(obj));
  
  test.equals(typeof foo, 'object', 'foo should become an object');
  test.equals(foo, obj.foo, 'foo should exactly match obj.foo');
  
  test.done();
  
};

