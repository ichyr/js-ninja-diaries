'use strict';

function uDeferred() {
	// set up variable that will remember if the Deferred has been resolved/rejected
	// true - defered is settled
	// false - deferred is not settled yet
	var settled = false;

	// set up and define read-only promise instance variable
	var _promise = new uPromise();
	Object.defineProperty(this, 'promise', {
		writable: false,
		value: _promise
	});

	// set up of public instance API methods

	// notification about work successfully completed
	this.resolve = function(data) {
		if (!settled) {
			data ? this.promise._resolve(data) : this.promise._resolve();
			settled = true;
		}
	};

	// notification about work failed to complete
	this.reject = function(data) {
		if (!settled) {
			data ? this.promise._reject(data) : this.promise._reject();
			settled = true;
		}
	};

	// notification from work being done
	this.notify = function(data) {
		if (!settled) {
			data ? this.promise._notify(data) : this.promise._notify();
		}
	};
};