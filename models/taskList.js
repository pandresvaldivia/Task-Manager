require('colors');
const { getTimeElapse } = require('../helpers/date.helper');
const { readTasks } = require('../helpers/file.helper');
const { now } = require('../helpers/date.helper');
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

		for (const task of tasks) {
			this.tasks[task.id] = task;
		}
	}

	taskStatus(status) {
		return status ? '✅ Completed'.green : '❌ Pending'.red;
	}

	toogleStatus(ids) {
		for (const task of this.tasksArray) {
			if (ids.includes(task.id)) {
				task.completed_at = now();
				continue;
			}

			task.completed_at = false;
		}
	}

	deleteTask(id) {
		delete this.tasks[id];
	}

	get tasksInfo() {
		const tasks = this.tasksArray;
		const tasksInfo = [];

		for (const task of tasks) {
			const { description, completed_at } = task;

			const info = `• ${description} :: ${this.taskStatus(completed_at)}`;

			tasksInfo.push(info);
		}

		return tasksInfo;
	}

	get tasksArray() {
		const list = [];
		const tasksId = Object.keys(this.tasks);

		for (const taskId of tasksId) {
			list.push(this.tasks[taskId]);
		}

		return list;
	}

	get completedTasks() {
		const tasks = this.tasksArray;
		const completedTasks = [];

		for (const task of tasks) {
			if (task.completed_at) {
				completedTasks.push(
					`• ${task.description} :: ✅ Completed ${getTimeElapse(
						task.completed_at
					)}`
				);
			}
		}

		return completedTasks;
	}

	get pendingTasks() {
		const tasks = this.tasksArray;
		const pendingTasks = [];

		for (const task of tasks) {
			if (!task.completed_at) {
				pendingTasks.push(
					`• ${task.description} :: ⏳ Created ${getTimeElapse(
						task.created_at
					)}`
				);
			}
		}

		return pendingTasks;
	}
}

module.exports = TaskList;
