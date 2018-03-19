'use strict';

const get = require('@strikeentco/get');
const set = require('@strikeentco/set');

const isObject = val => Object.prototype.toString.call(val) === '[object Object]';

const pick = (obj, paths, length, sep) => {
  const picked = {};
  for (let i = 0; i < length; i++) {
    const path = paths[i];
    const val = get(obj, path, sep);
    if (val === undefined) {
      continue; // eslint-disable-line no-continue
    }
    set(picked, path, val, sep);
  }
  return picked;
};

module.exports = (obj, paths, sep = '.') => {
  if (!isObject(obj) || !paths || !(Array.isArray(paths) || typeof paths === 'string')) {
    return {};
  }
  const { length } = paths;
  if (typeof paths === 'string' || length < 2) {
    const path = typeof paths === 'string' ? paths : paths[0];
    const val = get(obj, path, sep);
    return val !== undefined ? set({}, path, val, sep) : {};
  }
  return pick(obj, paths, length, sep);
};
