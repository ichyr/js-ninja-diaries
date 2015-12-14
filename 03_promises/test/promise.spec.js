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


	});
});