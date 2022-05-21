require('colors');
const inquire = require('inquirer');

const { MENU_QUESTIONS } = require('../constants/questions.constant');

const MENU_CONFIG = {
	type: 'list',
	name: 'option',
	message: 'Choose an option: ',
	choices: MENU_QUESTIONS,
};

const PAUSE_CONFIG = {
	type: 'input',
	name: 'pause',
	message: 'Press ENTER to continue',
};

const showMenu = async () => {
	console.clear();

	console.log('================================'.green);
	console.log('        Choose an option'.green);
	console.log('================================\n'.green);

	const { option } = await inquire.prompt(MENU_CONFIG);

	return option;
};

const pause = async () => {
	await inquire.prompt(PAUSE_CONFIG);
};

module.exports = {
	showMenu,
	pause,
};
