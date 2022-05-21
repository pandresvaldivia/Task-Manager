const createOptions = (options) => {
	const menuOptions = [];

	for (const option of options) {
		const { id, description } = option;

		menuOptions.push({ value: id, name: description });
	}
	menuOptions.push({ value: '0', name: 'Exit' });

	return menuOptions;
};

const createPendingOptions = (options) => {
	const menuOptions = [];

	for (const option of options) {
		const { id, description, completed_at } = option;

		const optionConfig = { value: id, name: description };

		if (completed_at) optionConfig.checked = true;

		menuOptions.push(optionConfig);
	}

	return menuOptions;
};

module.exports = {
	createOptions,
	createPendingOptions,
};
