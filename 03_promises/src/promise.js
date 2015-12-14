'use strict';

function uPromise() {

	// handlers array
	var handlers = [];
	// variable that shows if Deffered's work finished or not
	var _finished = 0;

	// private-like methods
	this._resolve = function() {};
	this._reject = function() {};
	this._notify = function() {};

	// function for registering of callbacks
	this.then = function(resolveCb, rejectCb, notifyCb) {
		handlers.push({
			resolve: resolveCb,
			reject: rejectCb,
			notify: notifyCb
		})

		return this;
	};
};