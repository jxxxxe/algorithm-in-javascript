function solution(cards) {
  var answer = 0;
  var swap = new Set([]);

  for (let i = 0; i < cards.length; i++) {
    var want = Math.min(cards[i]);
    var wantIdx = card;
    for (let j = 0; j < cards.length; j++) {
      if (i === j) {
        continue;
      }
      if (want) {
      }
    }
  }

  return answer;
}

console.log(
  solution([
    [10, 5, 15],
    [5, 15, 10],
    [10, 11, 9],
  ])
);
