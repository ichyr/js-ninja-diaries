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


	describe('.resolve method should', function() {
		it('be defined', function() {
			expect(d.resolve).toBeDefined();
			expect(d.resolve).toEqual(jasmine.any(Function));
		});

		it('be callable only once', function() {
			spyOn(d.promise, '_resolve');
			d.resolve();
			d.resolve();
			expect(d.promise._resolve.calls.count()).toEqual(1);
		});
	});

	describe('.reject method should', function() {
		it('be defined', function() {
			expect(d.reject).toBeDefined();
			expect(d.reject).toEqual(jasmine.any(Function));
		});

		it('be callable only once', function() {
			spyOn(d.promise, '_reject');
			d.reject();
			d.reject();
			expect(d.promise._reject.calls.count()).toEqual(1);
		});
	});

	describe('.notify method should', function() {
		it('be defined', function() {
			expect(d.notify).toBeDefined();
			expect(d.notify).toEqual(jasmine.any(Function));
		});

		it('be callable many times', function() {
			spyOn(d.promise, '_notify');
			d.notify();
			d.notify();
			expect(d.promise._notify.calls.count()).toEqual(2);
		});

		it('not be fired when deferred\'s has been work finished', function() {
			spyOn(d.promise, '_notify');
			d.notify();
			d.resolve();
			d.notify();
			expect(d.promise._notify.calls.count()).toEqual(1);
		});
	});
});