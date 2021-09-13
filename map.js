const b = require('benny');

const mapRecursive = (items, callback) => {
  const mapping = (items, callback, index, newItems) => {
    if (index === items.length) {
      return newItems;
    }

    const newValue = callback(items[index]);

    return mapping(items, callback, index + 1, [...newItems, newValue]);
  };

  return mapping(items, callback, 0, []);
};

const mapPush = (items, callback) => {
  const output = [];

  for (let i = 0; i < items.length; i++) {
    output.push(callback(items[i]));
  }

  return output;
};

const mapImmutable = (items, callback) => {
  let output = [];

  for (let i = 0; i < items.length; i++) {
    output = [...output, callback(items[i])];
  }

  return output;
};

const mapCancat = (items, callback) => {
  const output = [];

  for (let i = 0; i < items.length; i++) {
    output.concat(callback(items[i]));
  }

  return output;
};

const mapSplice = (items, callback) => {
  const output = [];

  for (let i = 0; i < items.length; i++) {
    output.splice(output.length, 0, callback(items[i]));
  }

  return output;
};

const mapIndex = (items, callback) => {
  const output = [];

  for (let i = 0; i < items.length; i++) {
    output[i] = callback(items[i]);
  }

  return output;
};

const mapLength = (items, callback) => {
  const output = [];

  for (let i = 0; i < items.length; i++) {
    output[output.length] = callback(items[i]);
  }

  return output;
};

const items5 = [1, 2, 3, 4, 5];
const items50 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
];
const duplicate = (number) => number * 2;

b.suite(
  'Map',
  b.add('mapRecursive', () => {
    const newArray = mapRecursive(items5, duplicate);
  }),
  b.add('mapPush', () => {
    const newArray = mapPush(items5, duplicate);
  }),
  b.add('mapImmutable', () => {
    const newArray = mapImmutable(items5, duplicate);
  }),
  b.add('mapCancat', () => {
    const newArray = mapCancat(items5, duplicate);
  }),
  b.add('mapSplice', () => {
    const newArray = mapSplice(items5, duplicate);
  }),
  b.add('mapIndex', () => {
    const newArray = mapIndex(items5, duplicate);
  }),
  b.add('mapLength', () => {
    const newArray = mapLength(items5, duplicate);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'map5Items', version: '1.0.0' })
);

b.suite(
  'Map',
  b.add('mapRecursive', () => {
    const newArray = mapRecursive(items50, duplicate);
  }),
  b.add('mapPush', () => {
    const newArray = mapPush(items50, duplicate);
  }),
  b.add('mapImmutable', () => {
    const newArray = mapImmutable(items50, duplicate);
  }),
  b.add('mapCancat', () => {
    const newArray = mapCancat(items50, duplicate);
  }),
  b.add('mapSplice', () => {
    const newArray = mapSplice(items50, duplicate);
  }),
  b.add('mapIndex', () => {
    const newArray = mapIndex(items50, duplicate);
  }),
  b.add('mapLength', () => {
    const newArray = mapLength(items50, duplicate);
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'map50Items', version: '1.0.0' })
);
