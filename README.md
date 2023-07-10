# idxd

> A tiny (90 bytes) function for indexing arrays of objects by some key.

## Install

```
$ yarn add idxd
```

## Usage

```js
import idxd from 'idxd';

const users = [
  { id: '001', firstName: 'John', lastName: 'Chrysostom' },
  { id: '002', firstName: 'Basil', lastName: 'the Great' },
  { id: '003', firstName: 'Gregory', lastName: 'of Nyssa' },
  { id: '004', firstName: 'Ephrem', lastName: 'the Syrian' },
];

const usersByLastName = idxd(users, 'lastName');
/* =>
{
  'Chrysostom': {
    id: '001',
    firstName: 'John',
  },
  'the Great': {
    id: '002',
    firstName: 'Basil',
    lastName: 'the Great',
  },
  'of Nyssa': {
    id: '003',
    firstName: 'Gregory',
  },
  'the Syrian': {
    id: '004',
    firstName: 'Ephrem',
  }
}
*/
```

## API

### `idxd(list, key)`

#### `list`

Type: `Array<Record<any, any>>`

Required: ✅

A list of objects that you wish to be indexed.

**Note**: If the value of the key you wish to index by is shared by another object, the last object with that value will overwrite all others.

#### `key`

Type: `string`

Required: ✅

The name of the field you wish to index on.
