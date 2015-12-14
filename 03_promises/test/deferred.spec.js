'use strict';

describe('uDeferred constructor function', function() {
	it('should be defined', function() {
		expect(uDeferred).toBeDefined();
		expect(uDeferred).toEqual(jasmine.any(Function));
	});
});

describe('uDeferred object', function() {
	var d;

	beforeEach(function() {
		d = new uDeferred();
	});

	it('should be defined after initialization', function() {
		expect(d).toBeDefined();
		expect(d).toEqual(jasmine.any(Object));
	});

	describe('.promise property should be', function() {
		it('defined', function() {
			expect(d.promise).toBeDefined();
			expect(d.promise).toEqual(jasmine.any(Object));
		});

		it('instance of uPromise class', function() {
			expect(d.promise).toEqual(jasmine.any(uPromise));		
		});		

		it('read-only', function() {
			function test() {
				d.promise = {val: 'new'};	
			}
			expect(test).toThrow();
		});
	});

	describe('.notify method should', function() {
		it('be defined', function() {
			expect(d.notify).toBeDefined();
			expect(d.notify).toEqual(jasmine.any(Function));
		});
	});

	describe('.resolve method should', function() {
		it('be defined', function() {
			expect(d.resolve).toBeDefined();
			expect(d.resolve).toEqual(jasmine.any(Function));
		});
	});

	describe('.reject method should', function() {
		it('be defined', function() {
			expect(d.reject).toBeDefined();
			expect(d.reject).toEqual(jasmine.any(Function));
		});
	});
});