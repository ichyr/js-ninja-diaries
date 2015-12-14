'use strict';

function uDeferred() {
	// set up and define read-only promise instance variable
	var _promise = new uPromise();
	Object.defineProperty(this, 'promise', {
		writable: false,
		value: _promise
	});

	// set up of public instance API methods

	// notification about work done
	this.notify = function() {};

	// notification about work successfully completed
	this.resolve = function() {};

	// notification about work failed to complete
	this.reject = function() {};

	// what if error was thrown?
};