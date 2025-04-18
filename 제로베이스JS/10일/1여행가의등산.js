function solution(N, arr) {
  var answer = Infinity;
  var dx = [-1, 0, 1, 0];
  var dy = [0, -1, 0, 1];
  var visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Infinity)
  );
  visited[0][0] = 0;
  var deque = [[0, 0, arr[0][0], 0]];

  while (deque.length) {
    var len = deque.length;
    for (let i = 0; i < len; i++) {
      var [curi, curj, prevScore, totalScore] = deque.shift();
      if (curi === N - 1 && curj === N - 1) {
        var diff = Math.abs(prevScore - arr[N - 1][N - 1]);
        answer = Math.min(answer, totalScore + diff);
        continue;
      }
      if (totalScore >= answer) {
        continue;
      }
      for (let k = 0; k < 4; k++) {
        var newi = curi + dx[k];
        var newj = curj + dy[k];
        if (newi >= 0 && newj >= 0 && newi < N && newj < N) {
          var newTotal = totalScore + Math.abs(prevScore - arr[newi][newj]);
          if (newTotal < visited[newi][newj]) {
            visited[newi][newj] = newTotal;
            deque.push([newi, newj, arr[newi][newj], newTotal]);
          }
        }
      }
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 4, 4, 4, 4],
    [1, 1, 4, 3, 3],
    [0, 1, 3, 1, 1],
  ])
);
