function solution(room, x1, y1, x2, y2) {
  var answer = Number.MAX_SAFE_INTEGER;

  var dx = [0, 1, -1, 0];
  var dy = [1, 0, 0, -1];

  const visited = Array.from({ length: room.length }, () =>
    Array.from({ length: room[0].length }, () => Infinity)
  );

  function dfs(curx, cury, direction, count) {
    if (curx === x2 && cury === y2) {
      answer = count;
      return;
    }

    for (let i = 0; i < 4; i++) {
      var newCount = count;
      if (direction !== i) {
        newCount += 1;
      }
      var [newX, newY] = [curx + dx[i], cury + dy[i]];
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < room.length &&
        newY < room.length &&
        newCount < answer &&
        visited[newX][newY] > newCount
      ) {
        visited[newX][newY] = newCount;
        dfs(newX, newY, i, newCount);
      }
    }
  }
  console.log(visited);
  dfs(x1, y1, -1, -1); //
  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    ],
    0,
    0,
    9,
    8
  )
);
