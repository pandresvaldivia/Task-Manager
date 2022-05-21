const inquirer = require('inquirer');

const createOptions = (options) => {
	const menuOptions = [];

	for (const option of options) {
		const { id, description } = option;

		menuOptions.push({ value: id, name: description });
	}
	menuOptions.push({ value: '0', name: 'Exit' });

	return menuOptions;
};

const showDynamicMenu = async (options, message = '') => {
	const menuOptions = createOptions(options);

	const { option } = await inquirer.prompt({
		type: 'list',
		name: 'option',
		message,
		choices: menuOptions,
	});

	return option;
};

const confirm = async (message = '') => {
	const { answer } = await inquirer.prompt({
		type: 'confirm',
		name: 'answer',
		message,
	});

	return answer;
};

module.exports = {
	showDynamicMenu,
	confirm,
};
