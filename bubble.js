function bubbleSort(array) {
	let didSwitch = false;

	do {
		didSwitch = false;

		for (let i = 0; i < array.length; i++) {
			if (array[i] > array[i + 1]) {
				let temp = array[i + 1];
				array[i + 1] = array[i];
				array[i] = temp;
				didSwitch = true;
			}
		}
	} while (didSwitch);
	return array;
}

module.exports = bubbleSort;
