function solution(A, B) {
  var solo = Array(B + 1).fill(true);
  solo[0] = false;
  solo[1] = false;

  for (let i = 2; i <= Math.abs(B); i++) {
    if (solo[i]) {
      for (let j = 2; i * j <= B; j++) {
        solo[i * j] = false;
      }
    }
  }

  return solo.slice(A, B + 1).filter((val) => val).length;
}
console.log(solution(100000000, 100000007));
