'use strict';

function uDeferred() {
	// set up and define read-only promise instance variable
	var _promise = new uPromise();
	Object.defineProperty(this, 'promise', {
		writable: false,
		value: _promise
	});
};