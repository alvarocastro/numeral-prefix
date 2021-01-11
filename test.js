const test = require('ava');
const numeralPrefix = require('.');

test('Should work', t => {
	const cases = {
		1: 'henagon',
		2: 'digon',
		3: 'trigon',
		4: 'tetragon',
		5: 'pentagon',
		6: 'hexagon',
		7: 'heptagon',
		8: 'octagon',
		9: 'enneagon',
		10: 'decagon',
		11: 'hendecagon',
		12: 'dodecagon',
		13: 'tridecagon',
		14: 'tetradecagon',
		15: 'pentadecagon',
		16: 'hexadecagon',
		17: 'heptadecagon',
		18: 'octadecagon',
		19: 'enneadecagon',
		20: 'icosagon',
		21: 'icosikaihenagon',
		22: 'icosikaidigon',
		23: 'icosikaitrigon',
		24: 'icosikaitetragon',
		25: 'icosikaipentagon',
		26: 'icosikaihexagon',
		27: 'icosikaiheptagon',
		28: 'icosikaioctagon',
		29: 'icosikaienneagon',
		30: 'triacontagon',
		31: 'triacontakaihenagon',
		32: 'triacontakaidigon',
		33: 'triacontakaitrigon',
		34: 'triacontakaitetragon',
		35: 'triacontakaipentagon',
		36: 'triacontakaihexagon',
		37: 'triacontakaiheptagon',
		38: 'triacontakaioctagon',
		39: 'triacontakaienneagon',
		40: 'tetracontagon',
		41: 'tetracontakaihenagon',
		42: 'tetracontakaidigon',
		43: 'tetracontakaitrigon',
		44: 'tetracontakaitetragon',
		45: 'tetracontakaipentagon',
		46: 'tetracontakaihexagon',
		47: 'tetracontakaiheptagon',
		48: 'tetracontakaioctagon',
		49: 'tetracontakaienneagon',
		50: 'pentacontagon',
		51: 'pentacontakaihenagon',
		52: 'pentacontakaidigon',
		53: 'pentacontakaitrigon',
		54: 'pentacontakaitetragon',
		55: 'pentacontakaipentagon',
		56: 'pentacontakaihexagon',
		57: 'pentacontakaiheptagon',
		58: 'pentacontakaioctagon',
		59: 'pentacontakaienneagon',
		60: 'hexacontagon',
		61: 'hexacontakaihenagon',
		62: 'hexacontakaidigon',
		63: 'hexacontakaitrigon',
		64: 'hexacontakaitetragon',
		65: 'hexacontakaipentagon',
		66: 'hexacontakaihexagon',
		67: 'hexacontakaiheptagon',
		68: 'hexacontakaioctagon',
		69: 'hexacontakaienneagon',
		70: 'heptacontagon',
		71: 'heptacontakaihenagon',
		72: 'heptacontakaidigon',
		73: 'heptacontakaitrigon',
		74: 'heptacontakaitetragon',
		75: 'heptacontakaipentagon',
		76: 'heptacontakaihexagon',
		77: 'heptacontakaiheptagon',
		78: 'heptacontakaioctagon',
		79: 'heptacontakaienneagon',
		80: 'octacontagon',
		81: 'octacontakaihenagon',
		82: 'octacontakaidigon',
		83: 'octacontakaitrigon',
		84: 'octacontakaitetragon',
		85: 'octacontakaipentagon',
		86: 'octacontakaihexagon',
		87: 'octacontakaiheptagon',
		88: 'octacontakaioctagon',
		89: 'octacontakaienneagon',
		90: 'enneacontagon',
		91: 'enneacontakaihenagon',
		92: 'enneacontakaidigon',
		93: 'enneacontakaitrigon',
		94: 'enneacontakaitetragon',
		95: 'enneacontakaipentagon',
		96: 'enneacontakaihexagon',
		97: 'enneacontakaiheptagon',
		98: 'enneacontakaioctagon',
		99: 'enneacontakaienneagon',
		100: 'hectogon',
		101: 'hectahenagon',
		200: 'dihectagon',
		300: 'trihectagon',
		400: 'tetrahectagon',
		500: 'pentahectagon',
		600: 'hexahectagon',
		700: 'heptahectagon',
		800: 'octahectagon',
		900: 'enneahectagon',
		1000: 'chiliagon',
		2000: 'dischiliagon',
		3000: 'trischiliagon',
		4000: 'tetrakischiliagon',
		5000: 'pentakischiliagon',
		6000: 'hexakischiliagon',
		7000: 'heptakischiliagon',
		8000: 'octakischiliagon',
		9000: 'enneakischiliagon',
		10000: 'myriagon',
		20000: 'dismyriagon',
		30000: 'trismyriagon',
		40000: 'tetrakismyriagon',
		50000: 'pentakismyriagon',
		60000: 'hexakismyriagon',
		70000: 'heptakismyriagon',
		80000: 'octakismyriagon',
		90000: 'enneakismyriagon',
		100000: 'decakismyriagon',
		200000: 'icosakismyriagon',
		300000: 'triacontakismyriagon',
		400000: 'tetracontakismyriagon',
		500000: 'pentacontakismyriagon',
		600000: 'hexacontakismyriagon',
		700000: 'heptacontakismyriagon',
		800000: 'octacontakismyriagon',
		900000: 'enneacontakismyriagon',
		1000000: 'hecatontakismyriagon',
		2000000: 'diacosakismyriagon',
		3000000: 'triacosakismyriagon',
		4000000: 'tetracosakismyriagon',
		5000000: 'pentacosakismyriagon',
		6000000: 'hexacosakismyriagon',
		7000000: 'heptacosakismyriagon',
		8000000: 'octacosakismyriagon',
		9000000: 'enneacosakismyriagon',
		10000000: 'chiliakismyriagon',
		20000000: 'dischiliakismyriagon',
		30000000: 'trischiliakismyriagon',
		40000000: 'tetrakischiliakismyriagon',
		50000000: 'pentakischiliakismyriagon',
		60000000: 'hexakischiliakismyriagon',
		70000000: 'heptakischiliakismyriagon',
		80000000: 'octakischiliakismyriagon',
		90000000: 'enneakischiliakismyriagon',
		100000000: 'myriakismyriagon'
	};

	for (const [n, name] of Object.entries(cases)) {
		t.is(numeralPrefix(Number(n), 'gon'), name);
	}
});

test('Should work with Infinity', t => {
	t.is(numeralPrefix(Number.POSITIVE_INFINITY, 'gon'), 'apeirogon');
	t.is(numeralPrefix(Infinity, 'gon'), 'apeirogon'); // eslint-disable-line unicorn/prefer-number-properties
});

test('Should work without suffix', t => {
	t.is(numeralPrefix(1), 'hena');
});

test('Should throw error for invalid values', t => {
	let error;
	error = t.throws(() => {
		numeralPrefix(0, 'gon');
	}, {
		instanceOf: Error
	});
	t.is(error.message, 'Number must be greater than zero');

	error = t.throws(() => {
		numeralPrefix(1.3, 'gon');
	}, {
		instanceOf: TypeError
	});
	t.is(error.message, 'Number must be integer');

	error = t.throws(() => {
		numeralPrefix('12', 'gon');
	}, {
		instanceOf: TypeError
	});
	t.is(error.message, 'Number must be integer');

	error = t.throws(() => {
		numeralPrefix(1000000000, 'gon');
	}, {
		instanceOf: Error
	});
	t.is(error.message, 'Number can\'t be greater than 999999999');
});
