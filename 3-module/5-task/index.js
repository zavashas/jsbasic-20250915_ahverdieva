function getMinMax(str) {
  let parts = str.split(' ');

  let numbers = parts
    .map(item => parseFloat(item))
    .filter(num => !isNaN(num));

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  return { min, max }
}
