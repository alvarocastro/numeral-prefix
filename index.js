const transforms = {
	0(previous, [number, nextNumber]) {
		const units = {
			1: 'hena',
			2: 'di',
			3: 'tri',
			4: 'tetra',
			5: 'penta',
			6: 'hexa',
			7: 'hepta',
			8: 'octa',
			9: 'ennea'
		};
		let unit;
		if (number === 1 && nextNumber === 1) {
			unit = 'hen';
		} else if (number === 2 && nextNumber === 1) {
			unit = 'do';
		} else {
			unit = units[number];
		}

		return `${previous}${unit}`;
	},
	1(previous, [nextNumber, number]) {
		const units = {
			1: 'deca',
			2: 'icosa',
			3: 'triaconta',
			4: 'tetraconta',
			5: 'pentaconta',
			6: 'hexaconta',
			7: 'heptaconta',
			8: 'octaconta',
			9: 'enneaconta'
		};
		let unit = units[number];
		if (nextNumber > 0 && number > 1) {
			if (number === 2) {
				unit = 'icosi';
			}

			unit += 'kai';
		}

		return number === 1 ? `${previous}${unit}` : `${unit}${previous}`;
	},
	2(previous, numbers) {
		const units = {
			1: numbers[1] === 0 && numbers[0] === 0 ? 'hecto' : 'hecta',
			2: 'dihecta',
			3: 'trihecta',
			4: 'tetrahecta',
			5: 'pentahecta',
			6: 'hexahecta',
			7: 'heptahecta',
			8: 'octahecta',
			9: 'enneahecta'
		};
		const unit = units[numbers[2]];
		return `${unit}${previous}`;
	},
	3(previous, numbers) {
		const units = {
			1: 'chilia',
			2: 'dischilia',
			3: 'trischilia',
			4: 'tetrakischilia',
			5: 'pentakischilia',
			6: 'hexakischilia',
			7: 'heptakischilia',
			8: 'octakischilia',
			9: 'enneakischilia'
		};
		const unit = units[numbers[3]];
		return `${unit}${previous}`;
	},
	4(previous, numbers) {
		const units = {
			1: 'myria',
			2: 'dismyria',
			3: 'trismyria',
			4: 'tetrakismyria',
			5: 'pentakismyria',
			6: 'hexakismyria',
			7: 'heptakismyria',
			8: 'octakismyria',
			9: 'enneakismyria'
		};
		const unit = units[numbers[4]];
		return `${unit}${previous}`;
	},
	5(previous, numbers) {
		const units = {
			1: 'decakismyria',
			2: 'icosakismyria',
			3: 'triacontakismyria',
			4: 'tetracontakismyria',
			5: 'pentacontakismyria',
			6: 'hexacontakismyria',
			7: 'heptacontakismyria',
			8: 'octacontakismyria',
			9: 'enneacontakismyria'
		};
		const unit = units[numbers[5]];
		return `${unit}${previous}`;
	},
	6(previous, numbers) {
		const units = {
			1: 'hecatontakismyria',
			2: 'diacosakismyria',
			3: 'triacosakismyria',
			4: 'tetracosakismyria',
			5: 'pentacosakismyria',
			6: 'hexacosakismyria',
			7: 'heptacosakismyria',
			8: 'octacosakismyria',
			9: 'enneacosakismyria'
		};
		const unit = units[numbers[6]];
		return `${unit}${previous}`;
	},
	7(previous, numbers) {
		const units = {
			1: 'chiliakismyria',
			2: 'dischiliakismyria',
			3: 'trischiliakismyria',
			4: 'tetrakischiliakismyria',
			5: 'pentakischiliakismyria',
			6: 'hexakischiliakismyria',
			7: 'heptakischiliakismyria',
			8: 'octakischiliakismyria',
			9: 'enneakischiliakismyria'
		};
		const unit = units[numbers[7]];
		return `${unit}${previous}`;
	},
	8(previous, numbers) {
		const units = {
			1: 'myriakismyria',
			2: 'dismyriakismyria',
			3: 'trismyriakismyria',
			4: 'tetrakismyriakismyria',
			5: 'pentakismyriakismyria',
			6: 'hexakismyriakismyria',
			7: 'heptakismyriakismyria',
			8: 'octakismyriakismyria',
			9: 'enneakismyriakismyria'
		};
		const unit = units[numbers[8]];
		return `${unit}${previous}`;
	}
};

const numeralPrefix = function (number, suffix = '') {
	if (number === Number.POSITIVE_INFINITY) {
		return `apeiro${suffix}`;
	}

	if (!Number.isInteger(number)) {
		throw new TypeError('Number must be integer');
	}

	if (number <= 0) {
		throw new Error('Number must be greater than zero');
	}

	if (number > 999999999) {
		throw new Error('Number can\'t be greater than 999999999');
	}

	const numbers = number
		.toString()
		.split('')
		.map(n => Number(n))
		.reverse();

	let result = '';
	numbers.forEach((n, i) => {
		if (n > 0) {
			result = transforms[i](result, numbers, number);
		}
	});

	return result + suffix;
};

module.exports = numeralPrefix;
