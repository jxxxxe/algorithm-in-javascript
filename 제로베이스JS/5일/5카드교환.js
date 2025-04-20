function solution(cards) {
  var swap = new Set([]);

  function findMinIdx(arr, idx) {
    var want = Math.min(...arr);

    const count = arr.filter((a) => a === want).length;
    if (count > 1) {
      swap.add(idx);
      return -1;
    }

    return arr.indexOf(want);
  }
  const mins = cards.map((card) => Math.min(...card));
  const minIdxs = cards.map((card, idx) => findMinIdx(card, idx));
  //min이 2개면 안됨
  //min과 주려는값-1이 같으면 안됨
  //min인덱스가 같으면 안됨

  for (let i = 0; i < cards.length; i++) {
    if (swap.has(i)) {
      continue;
    }
    swap.add(i);

    for (let j = 0; j < cards.length; j++) {
      if (
        i !== j &&
        !swap.has(j) &&
        minIdxs[i] !== minIdxs[j] &&
        cards[i][minIdxs[i]] !== cards[i][minIdxs[j]] - 1 &&
        cards[j][minIdxs[j]] !== cards[j][minIdxs[i]] - 1
      ) {
        mins[i] += 1;
        mins[j] += 1;
        swap.add(j);
        break;
      }
    }
  }
  const answer = mins.reduce((acc, cur) => acc + cur);

  return answer;
}

console.log(
  solution([
    [8, 11, 11],
    [10, 7, 13],
    [15, 10, 5],
    [7, 17, 6],
  ])
);
