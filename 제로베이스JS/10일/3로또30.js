function solution(N, selected, lottos) {
  var answer = 0;

  for (let lotto of lottos) {
    var success = true;
    for (let lo of lotto) {
      if (!selected.includes(lo)) {
        success = false;
        break;
      }
    }
    if (success) answer++;
  }

  return answer;
}
