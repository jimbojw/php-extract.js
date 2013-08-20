# php-extract.js

PHP's extract() function, ported to JavaScript.

## usage

Given an object, the `extract()` function produces code which you run through `eval()`.
The generated code creates variables in the local scope for each key in the target object.

```js
(function() {
  
  var obj = { foo: "bar" };
  
  eval(extract(obj));
  
  foo === obj.foo; // true

})();
```

`extract()` does not pass values through JSON serialization, they are strictly equal to the values in the original object.
