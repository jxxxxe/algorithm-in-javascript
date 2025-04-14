function solution(n_coffee, beans, orders) {
  var answer = 0;
  var acidityIdx = 0;
  var acidity = beans[acidityIdx];
  for (let i = 0; i < orders.length; i++) {
    if (i > 0 && i % n_coffee === 0) {
      acidity *= 2;
    }
    if (acidity > 10) {
      acidityIdx++;
      if (acidityIdx >= beans.length) {
        return -1;
      }
      acidity = beans[acidityIdx];
    }

    answer += acidity * (1 + orders[i]);
  }
  return answer;
}

console.log(solution(2, [5, 2, 4], [1, 3, 2, 2, 1, 3, 3, 2]));
