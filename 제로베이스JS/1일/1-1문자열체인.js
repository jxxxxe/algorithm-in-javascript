function solution(words) {
  var answer = 0;
  words.sort((a, b) => a.length - b.length);

  for (let i = 0; i < words.length; i++) {
    var target = words[i];
    var count = 1;
    for (let j = i + 1; j < words.length; j++) {
      if (words[j].length - target.length > 1) {
        break;
      }
      if (words[j].length === target.length) {
        continue;
      }

      for (let k = 0; k < words[j].length; k++) {
        if (words[j][k] !== target[k]) {
          var tmpWord = [...words[j]];
          tmpWord.splice(k, 1);
          if (tmpWord === target) {
            break;
          }
          target = words[j];
          count += 1;
        }
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

solution(["a", "b", "ba", "bca", "bda", "bdca"]);
