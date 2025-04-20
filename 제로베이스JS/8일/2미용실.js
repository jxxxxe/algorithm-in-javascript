function solution(N, reserved) {
  let answer = 0;
  reserved.sort((a, b) => a[1] - b[1]);
  let prev = null;
  for (let cur of reserved) {
    if (!prev || prev[1] <= cur[0]) {
      prev = cur;
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(8, [
    [2, 7],
    [7, 10],
    [10, 13],
    [10, 12],
    [12, 15],
    [15, 16],
    [15, 18],
    [16, 17],
  ])
);
