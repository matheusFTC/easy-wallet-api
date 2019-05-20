const removeEmpty = forChecking => {
  Object.keys(forChecking).forEach(key => {
    if (forChecking[key] && typeof forChecking[key] === 'object') {
      removeEmpty(forChecking[key]);
    } else if (forChecking[key] === undefined) {
      delete forChecking[key];
    }
  });

  return forChecking;
};

module.exports = removeEmpty;
