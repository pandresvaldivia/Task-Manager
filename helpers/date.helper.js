const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

const getTimeElapse = (taskDate) => {
	return dayjs(taskDate).fromNow();
};

const now = () => {
	return dayjs().format('YYYY-MM-DD HH:mm:ss');
};

module.exports = {
	now,
	getTimeElapse,
};
