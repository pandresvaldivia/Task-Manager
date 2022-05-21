const formatTwoDigits = (number) => {
	return number.toLocaleString('en-US', {
		minimumIntegerDigits: 2,
	});
};
