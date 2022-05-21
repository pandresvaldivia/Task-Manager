require('colors');
const { readTasks } = require('../helpers/file.helper');
const Task = require('./task');

class TaskList {
	constructor() {
		this.tasks = {};
		this.loadTasks();
	}

	addTask(description = 'No description') {
		const task = new Task(description);
		this.tasks[task.id] = task;
	}

	loadTasks() {
		const tasks = readTasks();
		const tasksId = Object.keys(tasks);

		for (const taskId of tasksId) {
			this.tasks[taskId] = tasks[taskId];
		}
	}

	get tasksArray() {
		const list = [];
		const tasksId = Object.keys(this.tasks);

		for (const taskId of tasksId) {
			const { description, isCompleted } = this.tasks[taskId];
			const state = isCompleted ? 'Completed'.green : 'Pending'.red;

			list.push(`${description} :: ${state}`);
		}

		return list;
	}
}

module.exports = TaskList;
