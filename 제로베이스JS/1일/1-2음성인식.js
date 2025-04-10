function solution(call) {
  var maxIdx = [];
  var maxCnt = 0;
  var lowerCall = call.toLowerCase();

  for (let i = 0; i < lowerCall.length; i++) {
    var count = 1;
    for (let j = i + 1; j < lowerCall.length; j++) {
      if (lowerCall[i] === lowerCall[j]) {
        count += 1;
      }
    }
    if (maxCnt === count) {
      maxIdx.push(i);
    } else if (maxCnt < count) {
      maxIdx = [i];
      maxCnt = count;
    }
  }
  str = call;
  for (var idx of maxIdx) {
    str = str.replaceAll(call[idx].toLowerCase(), "");
    str = str.replaceAll(call[idx].toUpperCase(), "");
  }
  return str;
}

solution("ABCabcA");
