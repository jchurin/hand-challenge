const cutHundredCharacters = (str) => {
	let strOutput = '';
	let output = [];

	str.split(' ').forEach(word => {
		if(strOutput.length < 100) {
			strOutput += `${word} `;
			output.push(word);
		}
	});


	return output.join(' ');
};

module.exports = cutHundredCharacters;