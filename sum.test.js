const sum = require('./sum.js');
const cap = require('./sum.js');
const rev = require('./sum.js');
const Calc = require('./sum.js');

test('Adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3);
});

test('Takes word and makes it Word', () => {
  expect(cap.cap('word')).toBe('Word');
});

test('Takes putty and reverses it to yttup', () => {
  expect(rev.rev('putty')).toBe('yttup');
})

test('Throws an error if you use an inproper opperator', () => {
  expect(Calc.Calc(2, 4, 3)).toBe("not a valid opperator");
})

test('Takes 2 numbers and adds them', () => {
  expect(Calc.Calc(2, '+', 3)).toBe(5);
})

test('Takes 2 numbers and subtracts them', () => {
  expect(Calc.Calc(2, '-', 3)).toBe(-1);
})

test('Takes 2 numbers and multiplies them', () => {
  expect(Calc.Calc(2, '*', 3)).toBe(6);
})

test('Takes 2 numbers and divides them', () => {
  expect(Calc.Calc(3, '/', 2)).toBe(1.5);
})