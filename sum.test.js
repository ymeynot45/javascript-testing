const sum = require('./sum.js');
const cap = require('./sum.js');
const rev = require('./sum.js');
const calc = require('/sum.js');

test('Adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test('Takes word and makes it Word', () => {
  expect(cap.cap('word')).toBe('Word');
});

test('Takes putty and reverses it to yttup', () => {
  expect(rev.rev('putty')).toBe('yttup');
})

test('Takes ')