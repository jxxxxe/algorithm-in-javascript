function solution(subway, S, E) {
  var dict = {};

  for (let sub of subway) {
    for (let i = 0; i < sub.length; i++) {
      const num = sub[i];
      const remainSub = [...sub];
      remainSub.splice(i, 1);
      if (!(num in dict)) {
        dict[num] = [];
      }
      dict[num].push(...remainSub);
    }
  }

  var deque = [S];
  var count = 0;
  var visited = new Set([S]);
  while (deque.length) {
    const len = deque.length;
    for (let i = 0; i < len; i++) {
      var cur = deque.pop();
      for (let num of dict[cur]) {
        if (visited.has(num)) {
          continue;
        }
        if (num === E) {
          return count;
        }
        deque.push(num);
        visited.add(num);
      }
    }
    count++;
  }

  return -1;
}

console.log(
  solution(
    [
      [7, 12],
      [5, 19],
      [7, 19],
      [9, 12, 13],
      [9, 5, 15],
    ],
    9,
    19
  )
);
