'use strict';

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

		});

		it('be chainable', function() {
			expect(p.then() instanceof uPromise).toBeTruthy();
		});

		it('run handlers in the order they were registered', function() {
			
		});

	});

	describe('when parent deferred is not yet finished', function() {
		describe('when 1 handler set up it should run', function() {
			it('notification callback', function() {});
			it('resolution callback', function() {});
			it('rejection callback', function() {});
		});
		describe('when many (2) handlers are set up it should run', function() {
			it('notification callback', function() {});
			it('resolution callback', function() {});
			it('rejection callback', function() {});
		});
	});

	describe('when parent deferred is finished', function() {
		it('should resolve newly registered handler if it was resolved', function() {});
		it('should reject newly registered handler if it was rejected', function() {});
		it('should not change status', function() {});
	});
});