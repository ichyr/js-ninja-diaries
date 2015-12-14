'use strict';

function uDeferred() {
	// set up variable that will remember if the Deferred has been resolved/rejected
	// true - work is still being done
	// false - works has been finished
	var _working = true;

	// set up and define read-only promise instance variable
	var _promise = new uPromise();
	Object.defineProperty(this, 'promise', {
		writable: false,
		value: _promise
	});

	// set up of public instance API methods

	// notification about work successfully completed
	this.resolve = function(data) {
		if (_working) {
			this.promise._resolve(data);
			_working = false;
		}
	};

	// notification about work failed to complete
	this.reject = function(data) {
		if (_working) {
			this.promise._reject(data);
			_working = false;
		}
	};

	// notification about work done
	this.notify = function(data) {
		if (_working) {
			this.promise._notify(data);
		}
	};
};