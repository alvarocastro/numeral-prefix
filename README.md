# Numeral Prefix

[![NPM](https://img.shields.io/npm/v/numeral-prefix)](https://www.npmjs.com/package/numeral-prefix)
[![Build status](https://img.shields.io/github/workflow/status/alvarocastro/numeral-prefix/build)](https://github.com/alvarocastro/numeral-prefix/actions?query=workflow%3Abuild)
[![Maintainability status](https://img.shields.io/codeclimate/maintainability/alvarocastro/numeral-prefix)](https://codeclimate.com/github/alvarocastro/numeral-prefix/maintainability)
[![Coverage status](https://img.shields.io/coveralls/github/alvarocastro/numeral-prefix)](https://coveralls.io/github/alvarocastro/numeral-prefix?branch=master)
[![Bundle size](https://img.shields.io/bundlephobia/min/numeral-prefix)](https://bundlephobia.com/result?p=numeral-prefix)
[![Code style: XO](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Release: Semantic](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A function to generate greek-derived numeral prefixes from a plain number.

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)

## Install

```bash
npm install numeral-prefix
```

## Usage

```js
const numeralPrefix = require('numeral-prefix');

console.log(numeralPrefix(5, 'gon'));
// => pentagon

console.log(numeralPrefix(12, 'gon'));
// => dodecagon

console.log(numeralPrefix(2048, 'gon'));
// => dischiliatetracontakaioctagon
```

### numeralPrefix(number[, suffix])

Generates a greek-derived numeral prefix based on the given number and appends the suffix.

#### number

Type: `Number`<br>

Number to generate the prefix from.

#### suffix

Type: `String`<br>
Default: ''

Suffix to append to the generated numeral prefix.

## Contributing

Contributions are always welcome! Please run `npm test` beforehand to ensure everything is ok.

## Support

If you use this package please consider starring it :)
