// Ways of creating read-only property

// 1. Object.defineProperty
(function (argument) {
	'use strict';
function readOnlyObject1() {

	// set up and define read-only promise instance variable
	var val = 'readOnlyValue';
	Object.defineProperty(this, 'prop', {
		writable: false,
		value: val
	});
};

var test = new readOnlyObject1();
console.log(test.prop);
test.prop = 'changed';
console.log(test.prop);
})();

// => Uncaught TypeError: Cannot assign to read only property 'prop' of #<readOnlyObject1>


// 2.

(function (argument) {
	'use strict';
function readOnlyObject2() {
	// set up and define read-only promise instance variable
	var val = 'readOnlyValue';
};

readOnlyObject2.generateProperty('prop', {
  get: function() {
    return this.val;
  },
  set: false
});

var test = new readOnlyObject2();
console.log(test.prop);
test.prop = 'changed';
console.log(test.prop);
})();