const pretty = require('pretty');
exports.format = strings => {
  const source = strings.join('').trim();
  return pretty(source)
};
