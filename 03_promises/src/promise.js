'use strict';

function uPromise() {
	// Can be: 1. pending 2. resolved 3. rejected
	// Initial state is pending
	var resolvedState = 'pending';
	// This is either data from deferred.resolve(data) or reson from deferred.reject(reason)
	var resolvedData = undefined;

	var resolveCallback, rejectCallback, notifyCallback;

	// Reference of next uPromise
	var nextChainedPromise;


	// private-like methods
	this._resolve = function(data) {};
	this._reject = function(reason) {};
	this._notify = function(data) {};


	// function for registering of callbacks
	this.then = function(resolveCb, rejectCb, notifyCb) {
		resolveCallback = resolveCb;
		rejectCallback = rejectCb;
		notifyCallback = notifyCb;

		this._isSet = true;

		nextChainedPromise = new uPromise();
		return nextChainedPromise;
	};


	this.nextPromise = nextChainedPromise;
	// property for querying if there is next promise set
	this._isSet = false;
};