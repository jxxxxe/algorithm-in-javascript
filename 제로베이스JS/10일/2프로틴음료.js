function solution(N, K, M, arr) {
  var answer = 0;

  function dfs(idx, total, count) {
    if (count === 0) {
      if (total >= M) {
        answer++;
      }
      return;
    }
    for (let i = idx; i < N; i++) {
      dfs(i + 1, total + arr[i], count - 1);
    }
  }

  for (let count = 1; count <= K; count += 2) {
    dfs(0, 0, count);
  }
  return answer;
}

console.log(solution(5, 3, 20, [3, 7, 10, 20, 21]));
