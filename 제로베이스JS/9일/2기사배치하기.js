function solution(N, K, board) {
  var answer = 0;
  var knight = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 0) {
        knight.push([i, j]);
      }
    }
  }

  var dx = [-1, -2, -2, -1, 1, 2, 2, 1];
  var dy = [-2, -1, 1, 2, 2, 1, -1, -2];
  var occupied = new Set([]);

  function dfs(idx, result, arr) {
    if (idx === K) {
      answer = Math.max(answer, result);
      return;
    }
    for (let k = idx; k < K; k++) {
      var [curx, cury] = knight.pop();
      for (let i = 0; i < 8; i++) {
        var [newx, newy] = [curx + dx[i], cury + dy[i]];
        const stringifiedXY = JSON.stringify([newx, newy]);
        const isOccupied = occupied.has(stringifiedXY);
        if (newx >= 0 && newx < N && newy >= 0 && newy < N && !isOccupied) {
          occupied.add(stringifiedXY);
          dfs(idx + 1, result + board[newx][newy], [...arr, [newx, newy]]);
          occupied.delete(stringifiedXY);
        }
      }
      knight.push([curx, cury]);
    }
  }

  dfs(0, 0, []);

  return answer;
}

console.log(
  solution(7, 3, [
    [2, 0, 6, 5, 7, 8, 4],
    [5, 7, 7, 8, 7, 4, 5],
    [8, 5, 9, 6, 5, 9, 6],
    [7, 9, 4, 5, 0, 8, 7],
    [9, 8, 5, 9, 7, 8, 8],
    [7, 0, 7, 4, 3, 7, 4],
    [7, 9, 9, 5, 8, 4, 3],
  ])
);
