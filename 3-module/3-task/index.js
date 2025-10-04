function camelize(str) {
  let parts = str.split('-');
  let result = parts.map((word, index) => {
    if (index > 0) {
      return word[0].toUpperCase() + word.slice(1);
    }
    return word;
  });
  return result.join('');
}
