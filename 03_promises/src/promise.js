'use strict';

function uPromise() {
	var defferedStatuses = {
		'pending': 0,
		'resolved': 1,
		'rejected': 2
	}

	// handlers array
	var handlers = [];
	var callHandlers = function(handlers, action, data) {
		var temp;
		if (handlers.length > 0) {
			try {
				temp = handlers.shift();
				if (data) {
					temp[action](data);
				} else {
					temp[action]();
				}
				callHandlers(handlers, action, data);
			} catch (error) {
				callHandlers(handlers, 'reject', error);
			}
		}
	};

	// Initial state is pending
	var resolvedState = defferedStatuses['pending'];
	// This is either data from deferred.resolve(data) or reson from deferred.reject(reason)
	var resolvedData = undefined;

	// private-like methods

	// TODO check for resolved or not.
	this._resolve = function(data) {
		if (!resolvedState) {
			resolvedState = defferedStatuses['resolved'];
			resolvedData = data;

			callHandlers(handlers, 'resolve', data);
		}
	};

	this._reject = function(reason) {
		if (!resolvedState) {
			resolvedState = defferedStatuses['rejected'];
			resolvedData = reason;

			callHandlers(handlers, 'reject', reason);
		}
	};

	this._notify = function(data) {
		if (!resolvedState) {
			handlers.forEach(function(h) {
				h['notify'](data);
			})
		}
	};

	// function for registering of callbacks
	// how to chain if deffered was resolved?
	this.then = function(resolveCb, rejectCb, notifyCb) {
		console.log('added then');
		switch (resolvedState) {
			case defferedStatuses['resolved']:
				resolveCb(resolvedData);
				console.log('resolved with value ' + resolvedData);
				break;
			case defferedStatuses['rejected']:
				rejectCb(resolvedData);
				console.log('rejected with value ' + resolvedData);
				break;
			default:
				handlers.push({
					'resolve': resolveCb,
					'reject': rejectCb,
					'notify': notifyCb
				});
				console.log('pushed to list');
		}

		return this;
	};
};