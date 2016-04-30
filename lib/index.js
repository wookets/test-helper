
function convert (val) {
	if (typeof val === 'number') {
		return val * val;
	}
	if (typeof val === 'string') {
		return val.split('').reverse().join('');
	}
	throw new Error("I don't know how to convert " + val);
}

module.exports = convert;