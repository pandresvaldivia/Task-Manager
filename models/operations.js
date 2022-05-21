const { saveTask } = require('../helpers/file.helper');
const { showDynamicMenu, confirm } = require('../inquirer/dynamic-menu');
const { input } = require('../inquirer/input');
const TaskList = require('./taskList');

const operations = {
	1: createTask,
	2: showTasks,
	3: () => {
		showTaskByStatus('completed');
	},
	4: () => {
		showTaskByStatus();
	},
	5: () => {
		console.log('option 5');
	},
	6: deleteTask,
	0: () => {
		console.log('Exit');
	},
};

const taskList = new TaskList();

async function createTask() {
	const description = await input('Enter a description: ');

	taskList.addTask(description);
	saveData();
}

function showTasks() {
	for (taskInfo of taskList.tasksInfo) {
		console.log(taskInfo);
	}
}

function showTaskByStatus(status = 'pending') {
	const tasks =
		status === 'pending' ? taskList.pendingTasks : taskList.completedTasks;

	for (const task of tasks) {
		console.log(task);
	}
}

async function deleteTask() {
	const id = await showDynamicMenu(taskList.tasksArray);

	const remove = await confirm(`Are you sure you want to delete this task?`);

	if (remove) {
		taskList.deleteTask(id);
		saveData();
	}
}

function saveData() {
	saveTask(taskList.tasksArray);
}

module.exports = {
	operations,
};
