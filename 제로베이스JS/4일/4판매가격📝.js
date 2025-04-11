function solution(prices, d, k) {
  prices.sort((a, b) => a - b);
  var len = prices.length;
  var accumArr = Array.from({ length: prices.length }, () => {});

  var sum = prices.reduce((acc, cur) => acc + cur, 0);
  if (prices[0] - prices[len - 1] <= d) {
    return Math.floor(sum / len);
  }

  var noMinMaxSum = sum - prices[0] - prices[len - 1];
  if (noMinMaxSum <= d) {
    return Math.floor(noMinMaxSum / (len - 2));
  }

  for (let start = 0; start < len - k + 1; start++) {
    var randomSum = prices
      .slice(start, start + k)
      .reduce((acc, cur) => acc + cur, 0);
    if (prices[start + k] - prices[start] <= d) {
      return Math.floor(randomSum / k);
    }
  }

  if (len % 2 === 1) {
    return prices[Math.floor(len / 2)];
  }

  return prices[Math.floor(len / 2) - 1];
}

console.log(solution([4, 5, 6, 7, 8], 4, 3));
