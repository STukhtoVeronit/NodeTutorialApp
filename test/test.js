const assert = require('assert');

describe('Array #indexOf', () =>{
	it('should ive -1', function () {
		assert.equal(-1, [1, 2, 3].indexOf(4));
	});
});