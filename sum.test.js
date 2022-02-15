const sum = require('./sum.js')
const cap = require('./sum.js')
const rev = require('./sum.js')
const Calc = require('./sum.js')
const cipher = require('./sum.js')
const verify = require('./sum.js')

test('Adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3)
})

test('Takes word and makes it Word', () => {
  expect(cap.cap('word')).toBe('Word')
})

test('Takes putty and reverses it to yttup', () => {
  expect(rev.rev('putty')).toBe('yttup')
})

test('Throws an error if you use an inproper opperator', () => {
  expect(Calc.Calc(2, 4, 3)).toBe('not a valid opperator')
})

test('Takes 2 numbers and adds them', () => {
  expect(Calc.Calc(2, '+', 3)).toBe(5)
})

test('Takes 2 numbers and subtracts them', () => {
  expect(Calc.Calc(2, '-', 3)).toBe(-1)
})

test('Takes 2 numbers and multiplies them', () => {
  expect(Calc.Calc(2, '*', 3)).toBe(6)
})

test('Takes 2 numbers and divides them', () => {
  expect(Calc.Calc(3, '/', 2)).toBe(1.5)
})

test('Ceaser cipher takes "defend the East wall of the castle Z" and shifts it by one', () => {
  expect(cipher.cipher('defend the east wall of the castle Z')
  ).toBe('efgfoe uif fbtu xbmm pg uif dbtumf A')
})

test('Takes an array and returns an object with average of the array', () => {
  expect(verify.verify([1, 8, 3, 4, 2, 6]).ave).toBe(4)
})

test('Takes an array and returns an object with min of the array', () => {
  expect(verify.verify([1, 8, 3, 4, 2, 6]).min).toBe(1)
})

test('Takes an array and returns an object with max of the array', () => {
  expect(verify.verify([1, 8, 3, 4, 2, 6]).max).toBe(8)
})

test('Takes an array and returns an object with length of the array', () => {
  expect(verify.verify([1, 8, 3, 4, 2, 6]).length).toBe(6)
})
