/* global test, expect */
const cutHundredCharacters = require('./index.js');

test('it cut the 100 characters with last word complete', () => {
	expect(cutHundredCharacters('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'))
		.toBe('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam');
});