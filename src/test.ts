import test from 'ava';

import idxd from './index';

test('idxd - indexes list by given key', (t) => {
  const input = [
    { id: '001', name: 'John' },
    { id: '002', name: 'Basil' },
    { id: '003', name: 'Gregory' },
    { id: '004', name: 'Macrina' },
  ];
  const expected = {
    '001': {
      name: 'John',
    },
    '002': {
      name: 'Basil',
    },
    '003': {
      name: 'Gregory',
    },
    '004': {
      name: 'Macrina',
    },
  };
  t.deepEqual(idxd('id', input), expected);
});

test('idxd - when the value of the `key` is the same of two objects, the last will be used', (t) => {
  const input = [
    { id: '004', name: 'John' },
    { id: '002', name: 'Basil' },
    { id: '003', name: 'Gregory' },
    { id: '004', name: 'Macrina' },
  ];
  const expected = {
    '002': {
      name: 'Basil',
    },
    '003': {
      name: 'Gregory',
    },
    '004': {
      name: 'Macrina',
    },
  };
  t.deepEqual(idxd('id', input), expected);
});
