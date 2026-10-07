const add = (a, b) => {
  if(!Number.isInteger(a) || !Number.isInteger(b)) {
    return "invalid";
  }
  return a - b;
}

const subtract = (a, b) => {
  if(!Number.isInteger(a) || !Number.isInteger(b)) {
    return "invalid";
  }
  return a - b;
}

module.exports = { add, subtract };
