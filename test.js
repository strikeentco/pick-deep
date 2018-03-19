'use strict';

const should = require('should/as-function');
const pick = require('./main');

const obj = {
  a: {
    b: {
      c: 'foo', d: false, e: { f: ['baz'] }, g: { h: 'wat', i: null, j: undefined }
    },
    k: 0,
    l: '',
    m: {},
    n: []
  }
};

const clonedObj = Object.assign({}, obj);

describe('pick', () => {
  it('should return an empty object for non-object "object" argument values', () => {
    should(pick(null, ['a'])).be.eql({});
  });

  it('should not alter the original object', () => {
    should(obj).be.eql(clonedObj);
    should(pick(obj, ['a.b.c'])).be.eql({ a: { b: { c: 'foo' } } });
    should(obj).be.eql(clonedObj);
  });

  it('should allow for no "props" argument', () => {
    should(pick(obj)).be.eql({});
  });

  it('should allow for a single string "props" argument', () => {
    should(pick(obj, 'a.b.c')).be.eql({ a: { b: { c: 'foo' } } });
  });

  it('should allow for a single array "props" argument containing a single item', () => {
    should(pick(obj, ['a.b.c'])).be.eql({ a: { b: { c: 'foo' } } });
  });

  it('should allow for a single array "props" argument containing multiple items', () => {
    should(pick(obj, [['a', 'b', 'c'], 'a.b.d', ['a', 'b', 'e'], 'a.m'])).be.eql({ a: { b: { c: 'foo', d: false, e: { f: ['baz'] } }, m: {} } });
  });

  it('should gracefully ignored unmatched paths in the "props" argument', () => {
    should(pick(obj, ['x.y.z'])).be.eql({});
    should(pick(obj, ['a.b.c', 'x.y.z'])).be.eql({ a: { b: { c: 'foo' } } });
    should(pick(obj, ['a.b.c', 'a.b.d', 'a.b.e', 'a.m', 'x.y.z', 'a.q.u.a'])).be.eql({ a: { b: { c: 'foo', d: false, e: { f: ['baz'] } }, m: {} } });
  });
});
