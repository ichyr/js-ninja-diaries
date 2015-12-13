'use strict';

describe('Deferred object', function() {
	it('should be defined', function() {
		expect(Deferred).toBeDefined();
		expect(Deferred).toBe(jasmine.any(Function));
	});
});