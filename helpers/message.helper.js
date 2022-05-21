require('colors');
const readline = require('readline');

const pause = async () => {
	await createQuestion(`Press ${'ENTER'.green} to continue`);
};

const createQuestion = (question, callback = () => {}) => {
	const questionReadline = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		questionReadline.question(question, (answer) => {
			callback(answer);
			questionReadline.close();
			resolve(answer);
		});
	});
};

module.exports = {
	pause,
};
