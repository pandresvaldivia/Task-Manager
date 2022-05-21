const { showMenu, pause } = require('./inquirer/menu.js');
const { operations } = require('./models/operations.js');

const main = async () => {
	let option;

	do {
		option = await showMenu();

		if (option !== '0') {
			await operations[option]();
			await pause();
		}
	} while (option !== '0');
};

main();
