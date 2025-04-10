function solution(s) {
  for (let count = s.length; count > 1; count--) {
    for (let start = 0; start <= s.length - count; start++) {
      //start <= s.length - count
      var newS = s.substring(start, start + count);
      if (s.includes(newS, start + 1)) {
        return count;
      }
    }
  }
  return 0;
}

console.log(solution("abbaba"));
