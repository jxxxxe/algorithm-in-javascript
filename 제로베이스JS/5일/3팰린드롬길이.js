function solution(s) {
  // 1. 개수 => 최대짝수
  // 2. 개수총합/2 => 길이
  // 3. 종류C길이 = 팩토리얼(길이만큼)/(종류-길이)
  const set = new Set([]);
  let count = 0;
  for (let al of s) {
    if (!set.has(al)) {
      set.add(al);
      var alCnt = s.split(al).length - 1;
      count += alCnt % 2 === 0 ? alCnt : alCnt - 1;
    }
  }
  if (set.size === s.length) {
    return 0;
  }
  var answer = 1;
  var num = set.size;
  for (let i = 0; i < count / 2; i++) {
    answer *= num;
    num--;
  }

  return answer / (set.size - count / 2);
}

console.log(solution("aabbbcc"));
