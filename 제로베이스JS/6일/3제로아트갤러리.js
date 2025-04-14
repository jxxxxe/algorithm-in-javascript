//24
function solution(arrive, patience) {
  var answer = 0;
  var arrIdx = arrive.map((time, idx) => [time, patience[idx]]);
  arrIdx.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  var waiting = [];
  var pating = [];

  for (let i = 0; i < arrIdx.length; i++) {
    var [arrTime, patiTime] = arrIdx[i];
    waiting.push(arrTime);
    pating.push(arrTime + patiTime);

    while (pating.length && pating[0] < arrTime) {
      waiting.shift();
      pating.shift();
    }

    if (waiting.length === 2) {
      waiting = waiting.slice(2);
      pating = pating.slice(2);
      answer += 2;
    }
  }
  return answer;
}

console.log(solution([9, 3, 8, 5, 7, 0, 10], [3, 1, 3, 1, 2, 2, 3]));

/**
 * 
 * arrive 배열
[12, 4, 5, 2, 7, 16], 
2 4 5 7 12 16

 patience 배열
[4, 6, 1, 3, 3, 2]
4 6 1 3 4 2
 *
 * 
 * arrive - patience
 * 0 1 2 3 4 5 6
 * - - 3 - 1 
 * - - - - - - 3 - - - - 1
 */
