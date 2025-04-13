function solution(n) {
  var result = 0;
  function dfs(index, used) {
    if (index === n - 1) {
      result++;
      return;
    }

    var max = index + 1 - used;
    for (let count = 0; count <= max; count++) {
      dfs(index + 1, used + count);
    }
  }
  dfs(0, 0);

  return result;
}

console.log(solution(3));
