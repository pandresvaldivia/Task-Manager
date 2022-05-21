const inquirer = require('inquirer');

const input = async (message) => {
	const question = {
		type: 'input',
		name: 'description',
		message,
		validate: (value) => {
			if (value.trim() === '') return 'Please enter a valid description';

			return true;
		},
	};

	const { description } = await inquirer.prompt(question);

	return description;
};

module.exports = {
	input,
};
