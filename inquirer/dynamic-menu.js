const inquirer = require('inquirer');

const { createOptions, createPendingOptions } = require('./options');

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

const showCheckBoxMenu = async (options, message = '') => {
	const menuOptions = createPendingOptions(options);

	const { tasks } = await inquirer.prompt({
		type: 'checkbox',
		name: 'tasks',
		message,
		choices: menuOptions,
	});

	return tasks;
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
	showCheckBoxMenu,
	confirm,
};
