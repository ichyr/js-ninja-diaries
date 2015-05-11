// Implementation of generator without storing values in instance/closured variable.

// Variant 1. With instance variable
function Generator(startValue) {
	this.value = startValue;
};

Generator.prototype.valueOf = function() {
	return this.value;
}

Generator.prototype.next = function() {
	return this.value++;
}

// Variant 2. Create a wrapper for Number class that has valueOf defined.

function Numberwrapper(number) {
	Number.call(number);
};
function F() {};
F.prototype = new Number();
F.prototype.constructor = F;
Numberwrapper.prototype = new F();
Numberwrapper.prototype.constructor = Numberwrapper;

Numberwrapper.prototype.next = function() {
	return this++;
}

var test = new Numberwrapper(10);
console.log(test);
test.next();