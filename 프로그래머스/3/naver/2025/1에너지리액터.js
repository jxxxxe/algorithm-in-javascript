function solution(energyLevels) {
  var answer = 0;
  var isSwap = true;
  while (isSwap) {
    isSwap = false;
    var nextLevels = [...energyLevels];
    for (let i = 0; i < energyLevels.length; i++) {
      if (energyLevels[i] >= 2) {
        isSwap = true;
        nextLevels[i] -= 2;
        if (i === 0) {
          nextLevels[i + 1] += 1;
        } else if (i === energyLevels.length - 1) {
          nextLevels[i - 1] += 1;
        } else {
          nextLevels[i - 1] += 1;
          nextLevels[i + 1] += 1;
        }
      }
    }
    if (isSwap) answer++;
    energyLevels = [...nextLevels];
  }

  return answer;
}
