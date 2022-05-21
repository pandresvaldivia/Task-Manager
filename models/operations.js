const { saveTask } = require('../helpers/file.helper');
const {
	showDynamicMenu,
	confirm,
	showCheckBoxMenu,
} = require('../inquirer/dynamic-menu');
const { input } = require('../inquirer/input');
const TaskList = require('./taskList');

const operations = {
	1: createTask,
	2: showTasks,
	3: () => showTaskByStatus('completed'),
	4: showTaskByStatus,
	5: completeTasks,
	6: deleteTask,
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

async function completeTasks() {
	const tasksId = await showCheckBoxMenu(
		taskList.tasksArray,
		'Select tasks to complete'
	);

	taskList.toogleStatus(tasksId);

	saveData();
}

async function deleteTask() {
	const id = await showDynamicMenu(
		taskList.tasksArray,
		'Which task do you want to delete?'
	);

	if (id === '0') return;

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
