function solution(s) {
  const set = Array.from(new Set(s));
  let isOdd = false;
  let typeCount = [];
  let sum = 0;
  for (let alpha of set) {
    var alCnt = s.split(alpha).length - 1;
    if (alCnt % 2 === 1) {
      if (isOdd) {
        return 0;
      }
      isOdd = true;
    }
    typeCount.push(Math.floor(alCnt / 2));
    sum += alCnt;
  }

  function facto(num) {
    var result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  const halfSize = Math.floor(sum / 2);
  let answer = facto(halfSize);
  for (let count of typeCount) {
    let fc = facto(count);
    answer /= fc;
  }

  return answer;
}

console.log(solution("aabbccc"));
/**
 * abc
 */
