const convert = require('./convert');

test('convet cotacao 4 and  quantidade 4', () => {
  expect(convert.convert(4,4)).toBe(16);
})
test('convet cotacao 0 and  quantidade 4', () => {
  expect(convert.convert(0,4)).toBe(0);
})
test('toMoney convert floar', () => {
  expect(convert.toMoney(2)).toBe('2.00');
})
test('toMoney convert string', () => {
  expect(convert.toMoney('2')).toBe('2.00');
})