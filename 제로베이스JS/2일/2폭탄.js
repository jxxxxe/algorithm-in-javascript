function solution(bombs) {
  var answer = 0;

  for (let i = 0; i < bombs.length; i++) {
    var popbombs = [i];
    var cnt = 1;
    var visited = new Set([i]);
    while (popbombs.length) {
      var bombIdx = popbombs.shift();
      var [x1, y1, r1] = bombs[bombIdx];

      for (var j = bombIdx + 1; j < bombs.length; j++) {
        if (visited.has(j)) {
          continue;
        }
        var [x2, y2, r2] = bombs[j];
        var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

        if (distance <= r1 + r2) {
          popbombs.push(j);
          visited.add(j);
          cnt += 1;
        }
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

console.log(
  solution([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 4],
  ])
);
