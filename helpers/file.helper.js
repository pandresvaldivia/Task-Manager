const fs = require('fs');

const FILE_PATH = './data/tasks.json';

const saveTask = (data) => {
	fs.writeFileSync(FILE_PATH, JSON.stringify(data));
};

const readTasks = () => {
	if (!fs.existsSync(FILE_PATH)) {
		return [];
	}

	return JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
};

module.exports = {
	saveTask,
	readTasks,
};
