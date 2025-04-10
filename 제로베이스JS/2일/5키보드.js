function solution(s, n) {
  var answer = 0;
  var strSet = new Set();

  for (var str of s) {
    if (str !== " ") {
      strSet.add(str.toLowerCase());
    }
  }

  var needCnt = strSet.size;
  if (s.toLowerCase() !== s) {
    needCnt += 1;
  }

  if (needCnt <= n) {
    return s.length;
  }

  return -1;
}

console.log(solution("time to time", 5));
