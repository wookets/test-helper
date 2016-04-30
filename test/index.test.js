
var expect = require('chai').expect;

var convert = require('../lib');

describe('convert', function () {

	it('should times a number by itself', function () {
		var result = convert(5);
		expect(result).to.equal(25);
	});

	it('should reverse a string', function () {
		var result = convert('meow');
		expect(result).to.equal('woem');
	});

	it('should blow up if invalid arg', function () {
		expect(convert).to.throw(Error);
	});

});