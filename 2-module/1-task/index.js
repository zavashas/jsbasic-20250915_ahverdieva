function sumSalary(salaries) {
  let sum = 0;

  for (let k in salaries) {
    if (Number.isFinite(salaries[k])) {
      sum += salaries[k];
    }
  }

  return sum;
}
