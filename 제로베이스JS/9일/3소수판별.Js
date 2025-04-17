function solution(A, B) {
  var answer = 0;

  for (let i = A; i <= B; i++) {
    var isSolo = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isSolo = false;
        break;
      }
    }
    if (isSolo) answer++;
  }

  return answer;
}
console.log(solution(100000000, 100000007));
