
import {expect} from 'chai';

import convert  from '../lib';

describe('convert', () => {

	it('should times a number by itself', () => {
		let result = convert(5);
		expect(result).to.equal(25);
	});

	it('should reverse a string', () => {
		let result = convert('meow');
		expect(result).to.equal('woem');
	});

	it('should blow up if invalid arg', () => {
		expect(convert).to.throw(Error);
	});

});