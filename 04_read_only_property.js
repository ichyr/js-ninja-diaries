// Ways of creating read-only property

// 1. Object.defineProperty
(function() {
	'use strict';

	function readOnlyObject1() {
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


// 2. Using getter and setter definition inside Object.defineProperty

(function() {
	'use strict';

	function readOnlyObject2() {
		var val = 'readOnlyValue';
		Object.defineProperty(this, 'prop', {
			get: function() {
				return this.val;
			},
			set: undefined
		});
	};


	var test = new readOnlyObject2();
	console.log(test.prop);
	test.prop = 'changed';
	console.log(test.prop);
})();

// => Uncaught TypeError: Cannot set property prop of #<readOnlyObject2> which has only a getter