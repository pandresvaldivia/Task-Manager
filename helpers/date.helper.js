const dayjs = require('dayjs');

const getCreatedTime = (taskDate) => {
	const today = dayjs();

	let diff = today.diff(taskDate, 'day');

	if (diff > 0) return `${diff} days ago`;

	diff = today.diff(taskDate, 'hour');

	if (diff > 0) return `${diff} hours ago`;

	diff = today.diff(taskDate, 'minute');

	if (diff > 0) return `${diff} minutes ago`;

	diff = today.diff(taskDate, 'second');

	if (diff > 0) return `${diff} seconds ago`;

	return 'just now';
};

const now = () => {
	return dayjs().format('YYYY-MM-DD HH:mm:ss');
};

module.exports = {
	now,
	getCreatedTime,
};
