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

		it('instance of Promise class', function() {
			expect(d.promise).toEqual(jasmine.any(uPromise));		
		});		

		it('read-only', function() {
			function test() {
				d.promise = {val: 'new'};	
			}
			
			expect(test).toThrow();
		});
	});
});