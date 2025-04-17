//90분
function solution(N, enemies) {
  var answer = Infinity;
  var dir = [-1, 0, 1];

  function getBonus(curDir, eneDir) {
    const dirDiff = Math.abs(curDir - eneDir);

    if (dirDiff === 0) {
      return 1;
    } else if (dirDiff === 1 || dirDiff === 3) {
      return 2;
    } else if (dirDiff === 2) {
      return 3;
    }
  }

  function dfs(curDir, score, curTime) {
    if (curTime > N) {
      answer = Math.min(answer, score);
      return;
    }
    for (let i = 0; i < 3; i++) {
      var newDir = curDir + dir[i];
      if (newDir === -1) {
        newDir = 3;
      } else if (newDir === 4) {
        newDir = 0;
      }

      var newScore = score;
      for (let j = 0; j < 4; j++) {
        const bonus = getBonus(newDir, j);
        newScore += enemies[j][curTime - 1] * bonus;
      }
      dfs(newDir, newScore, curTime + 1);
    }
  }

  dfs(0, 0, 1);

  return answer;
}

console.log(
  solution(4, [
    [2, 2, 3, 7],
    [1, 3, 8, 6],
    [3, 5, 6, 5],
    [4, 4, 9, 3],
  ])
);
