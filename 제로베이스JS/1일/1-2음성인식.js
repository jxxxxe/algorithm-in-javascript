function solution(call) {
  var answer = "";
  const alpas = new Set(call.toLowerCase());
  let maxAlp = new Set([]);
  let maxCnt = 0;
  for (let alpa of alpas) {
    const count = call.toLowerCase().split(alpa).length - 1;
    if (maxCnt < count) {
      maxAlp = new Set([alpa]);
      maxCnt = count;
    } else if (maxCnt === count) {
      maxAlp.add(alpa);
      maxCnt = count;
    }
  }
  for (let c of call) {
    if (!maxAlp.has(c.toLowerCase())) {
      answer += c;
    }
  }

  return answer;
}

solution("ABCabcA");
