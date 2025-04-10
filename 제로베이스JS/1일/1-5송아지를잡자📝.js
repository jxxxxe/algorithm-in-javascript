function solution(s, e) {
  var answer = 0;
  var deque = [s];
  var cowMove = 1;

  while (deque.length) {
    var count = deque.length;
    if (e > 200000) {
      return -1;
    }
    var setq = new Set([]);
    for (let i = 0; i < count; i++) {
      var de = deque.shift(); //
      if (de === e) {
        console.log(answer);
        return answer;
      }
      for (var value of [de - 1, de + 1, de * 2]) {
        //
        if (!setq.has(value) && value > 0 && value <= 200000) {
          deque.push(value);
          setq.add(value);
        }
      }
    }
    answer += 1;
    e += cowMove;
    cowMove += 1;
  }
  return answer;
}
solution(10, 3);
