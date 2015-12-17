'use strict';

var result = '';

describe('uPromise constructor function', function() {
	it('should be defined', function() {
		expect(uPromise).toBeDefined();
		expect(uPromise).toEqual(jasmine.any(Function));
	});
});

describe('uPromise object', function() {
	var p;

	beforeEach(function() {
		p = new uPromise();
	});

	it('should be defined after initialization', function() {
		expect(p).toBeDefined();
		expect(p).toEqual(jasmine.any(Object));
		expect(p instanceof uPromise).toBeTruthy();
	});

	describe('should expose methods to trigger', function() {
		it('resolution', function() {
			expect(p._resolve).toBeDefined();
			expect(p._resolve).toEqual(jasmine.any(Function));
		});

		it('rejection', function() {
			expect(p._reject).toBeDefined();
			expect(p._reject).toEqual(jasmine.any(Function));
		});

		it('update', function() {
			expect(p._notify).toBeDefined();
			expect(p._notify).toEqual(jasmine.any(Function));
		});
	});

	describe('.then method should', function() {
		it('be defined', function() {
			expect(p.then).toBeDefined();
			expect(p.then).toEqual(jasmine.any(Function));
		});

		describe('accept', function() {
			it('success callback', function() {});
			it('failure callback', function() {});
			it('notification callback', function() {});
		});

		it('be callable multiple times to register multiple observers', function() {
			var d = new uDeferred();
			var p = d.promise;
			result = '';

			p.then(function(data) {
				result += 'a'
			});
			p.then(function(data) {
				result += 'b'
			});

			d.resolve(0);

			expect(result).toEqual('ab');
		});

		it('be chainable', function() {
			expect(p.then() instanceof uPromise).toBeTruthy();
		});

		it('run handlers in the order they were registered', function() {
			var d = new uDeferred();
			var p = d.promise;
			var result = 'a';

			p.then(function(data) {
				result += 'b'
			});
			p.then(function(data) {
				result += 'c'
			});

			d.resolve();

			expect(result).toEqual('abc');
		});

	});

	describe('when parent deferred is not yet finished', function() {
		// blank function for test purposes
		var t = function() {};
		var r = function(data) { result += data; };
		var d, p;

		beforeEach(function() {
			d = new uDeferred();
			p = d.promise;
			result = '';
		});

		describe('when 1 handler set up it should run', function() {
			it('resolution callback', function() {
				p.then(function(data) {
					result += 'b'
				});
				d.resolve();
				expect(result).toEqual('b');
			});
			it('rejection callback', function() {
				p.then(function(data) {
					result += 'b'
				});
				d.resolve();
				expect(result).toEqual('b');
			});
			it('notification callback', function() {
				p.then(t, t, function() {
					result += 'b';
				});
				d.notify();
				expect(result).toEqual('b');
			});
		});

		describe('when many (2) handlers are set up it should run', function() {
			it('notification callback', function() {
				p.then(t, t, r);
				p.then(t, t, r);
				d.notify('a');
				expect(result).toEqual('aa');
			});
			it('resolution callback', function() {
				p.then(r);
				p.then(r);
				d.resolve('a');
				expect(result).toEqual('aa');
			});
			it('rejection callback', function() {
				p.then(t, r);
				p.then(t, r);
				d.reject('a');
				expect(result).toEqual('aa');
			});
		});
	});

	describe('when parent deferred is finished', function() {
		// blank function for test purposes
		var t = function() {};
		var r = function(data) { result += data; };
		var d, p;

		beforeEach(function() {
			d = new uDeferred();
			p = d.promise;
			result = '';
		});

		it('should resolve newly registered handler if it was resolved', function() {
			d.resolve('a');
			p.then(r);
			p.then(r);
			expect(result).toEqual('aa');
		});

		it('should reject newly registered handler if it was rejected', function() {
			d.reject('a');
			p.then(t, r);
			p.then(t, r);
			expect(result).toEqual('aa');
		});
		it('should not change status', function() {
			d.reject('a');
			p.then(t, r);
			d.resolve('b');
			p.then(r);
			d.reject('c');
			expect(result).toEqual('a');
		});
	});
});