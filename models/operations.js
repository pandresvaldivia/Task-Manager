const { saveTask } = require('../helpers/file.helper');
const { input } = require('../inquirer/input');
const TaskList = require('./taskList');

const operations = {
	1: createTask,
	2: showTasks,
	3: () => {
		console.log('option 4');
	},
	4: () => {
		console.log('option 4');
	},
	5: () => {
		console.log('option 5');
	},
	6: () => {
		console.log('option 6');
	},
	0: () => {
		console.log('Exit');
	},
};

const taskList = new TaskList();

async function createTask() {
	const description = await input('Enter a description: ');

	taskList.addTask(description);
	saveTask(taskList.tasks);
}

function showTasks() {
	for (task of taskList.tasksArray) {
		console.log(task);
	}
}

function saveData() {
	saveTask(taskList.tasks);
}

module.exports = {
	operations,
};
