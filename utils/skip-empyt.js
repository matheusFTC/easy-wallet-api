const skipEmpty = (value) => {
  if (value == null || (typeof value === 'string' && value.trim().length === 0)) {
    return undefined;
  } else {
    return value;
  }
};

module.exports = skipEmpty;
