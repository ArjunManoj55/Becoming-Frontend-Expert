const fibonacciSeries = (n) => {
  let series = [0, 1];

  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
};

console.log(fibonacciSeries(5)); 
// [0, 1, 1, 2, 3]