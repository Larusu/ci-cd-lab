const calculator = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
  // Act and Assert
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtract 15 - 25 to equal -10', () => {
  // Act and Assert
  expect(calculator.subtract(15, 25)).toBe(-10);
});

test('adds test + 1 to equal invalid', () => {
  // Act and Assert
  expect(calculator.add("test", 1)).toBe("invalid");
});

test('subtract jeff + 22 to equal invalid', () => {
  // Act and Assert
  expect(calculator.subtract("jeff", 22)).toBe("invalid");
});
