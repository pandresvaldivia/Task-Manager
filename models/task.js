const { v4: uuidv4 } = require('uuid');
const { now } = require('../helpers/date.helper');

class Task {
	constructor(description) {
		this.id = uuidv4();
		this.description = description;
		this.created_at = now();
		this.completed_at = false;
	}
}

module.exports = Task;
