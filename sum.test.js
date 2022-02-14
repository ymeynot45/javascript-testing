const sum = require('./sum.js');
const cap = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});


test('takes word and makes it Word', () => {
  expect(cap.cap('word')).toBe('Word');
});