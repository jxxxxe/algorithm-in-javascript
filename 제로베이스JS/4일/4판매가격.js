function solution(prices, d, k) {
  prices.sort((a, b) => a - b);
  var len = prices.length;

  //1번
  var sum = prices.reduce((acc, cur) => acc + cur, 0);
  if (prices[len - 1] - prices[0] <= d) {
    return Math.floor(sum / len);
  }

  //2번
  if (prices[len - 2] - prices[1] <= d) {
    return Math.floor((sum - prices[len - 1] - prices[0]) / (len - 2));
  }

  //3번
  for (let start = 0; start < len - k + 1; start++) {
    var randomSum = prices
      .slice(start, start + k)
      .reduce((acc, cur) => acc + cur, 0);
    if (prices[start + k - 1] - prices[start] <= d) {
      return Math.floor(randomSum / k);
    }
  }

  //4번 홀수
  if (len % 2 === 1) {
    return Math.floor(prices[Math.floor(len / 2)]);
  }

  //4번 홀수
  return Math.floor(prices[len / 2 - 1]);
}

console.log(solution([4, 5, 6, 7, 8], 4, 3));
