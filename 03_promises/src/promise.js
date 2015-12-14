'use strict';

function uPromise() {

	// handlers array
	var handlers = [];

	// private-like variables
	this._state = 0;

	// private-like methods
	this._resolve = function() {};
	this._reject = function() {};
	this._notify = function() {};

	// public properties


	// function for registering of callbacks
	this.then = function() {};
};