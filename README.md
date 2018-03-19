pick-deep [![License](https://img.shields.io/npm/l/pick-deep.svg)](https://github.com/strikeentco/pick-deep/blob/master/LICENSE)  [![npm](https://img.shields.io/npm/v/pick-deep.svg)](https://www.npmjs.com/package/pick-deep)
==========
[![Build Status](https://travis-ci.org/strikeentco/pick-deep.svg)](https://travis-ci.org/strikeentco/pick-deep)  [![node](https://img.shields.io/node/v/pick-deep.svg)](https://www.npmjs.com/package/pick-deep) [![Test Coverage](https://api.codeclimate.com/v1/badges/b30a2d27d1f5f1e5507a/test_coverage)](https://codeclimate.com/github/strikeentco/pick-deep/test_coverage) [![bitHound Score](https://www.bithound.io/github/strikeentco/pick-deep/badges/score.svg)](https://www.bithound.io/github/strikeentco/pick-deep)

One of the smallest (*28 sloc*) and most effective implementations of object properties deep picking.

# Usage

```sh
$ npm install pick-deep --save
```

```javascript
const pick = require('pick-deep');

pick({ a: { b: ['c', 'd'], e: 'f' } }, 'a.b');
pick({ a: { b: ['c', 'd'], e: 'f' } }, ['a.b']);
pick({ a: { b: ['c', 'd'], e: 'f' } }, [['a', 'b']]);
//=> { a: { b: ['c', 'd'] } }

pick({ a: { b: ['c', 'd'], e: 'f' }, j: { k: 'l' }, q: { r: ['s', 't'], u: 'w' }}, [['a', 'b'], 'j', 'q.u']);
//=> { a: { b: ['c', 'd'] }, j: { k: 'l' }, q: { u: 'w' }}

pick({ a: { b: 'c' } }, 'a.b.c.d');
//=> {}

pick({ a: { b: 'c' } }, 'a:b', ':');
//=> { a: { b: 'c' } }
```
## API

### pick(obj, paths, [separator])

#### Params:
* **obj** (*Object*) - Source object.
* **paths** (*String|Array|Array of Arrays*) - String, array or array of arrays with paths.
* **[separator]** (*String*) - `.` by default.

## Related

- [@strikeentco/get](https://github.com/strikeentco/get) - One of the smallest and most effective implementations of getting a nested value from an object.
- [@strikeentco/set](https://github.com/strikeentco/set) - One of the smallest and most effective implementations of setting a nested value on an object.

## License

The MIT License (MIT)<br/>
Copyright (c) 2018 Alexey Bystrov
