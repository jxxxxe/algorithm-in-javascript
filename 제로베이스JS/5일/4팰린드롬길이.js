function solution(s) {
  var s = Array.from(s).sort();
  var answer = 0;
  odd = false;
  for (let i = 0; i < s.length; i++) {
    var target = s[i];
    var count = 0;
    let idx = i;
    while (idx < s.length && s.includes(target, idx)) {
      count++;
      idx++;
    }
    if (count % 2 === 0) {
      answer += count;
    } else {
      answer += count - 1;
      odd = true;
    }
    i = idx - 1;
  }

  return odd ? answer + 1 : answer;
}

// function solution(s) {
//     aaabbbbccc

//   for (let size = s.length; size > 0; size--) {
//     for (let start = 0; start < s.length - size + 1; start++) {
//       console.log();
//       var subS = s.slice(start, start + size);
//       var [left, right] = [0, subS.length - 1];
//       var isPalin = true;

//       while (left < right) {
//         console.log(subS[left], subS[right], size);
//         if (subS[left] !== subS[right]) {
//           isPalin = false;
//           break;
//         }
//         left++;
//         right--;
//       }
//       if (isPalin) {
//         return size;
//       }
//     }
//   }

//   return 1;
// }

console.log(solution("abcbbbccaa"));
