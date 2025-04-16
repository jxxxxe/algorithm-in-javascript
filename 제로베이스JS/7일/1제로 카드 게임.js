function solution(N, cards) {
  var answer = Infinity;
  var total = cards.reduce((acc, cur) => acc + cur, 0);
  function dfs(startIdx, sum) {
    if (startIdx === N) {
      answer = Math.min(answer, Math.abs(total - 2 * sum));
      return;
    }
    for (let i = startIdx; i < N; i++) {
      dfs(i + 1, sum + cards[i]);
    }
  }

  dfs(0, 0);
  return answer;
}

console.log(solution(10, [19, 7, 18, 12, 15, 2, 17, 7, 20, 8]));
