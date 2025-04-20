function solution(s, e) {
  const MAX = 200000;
  var answer = 0;
  var stack = [s];
  var cowMove = 1;

  while (stack.length) {
    var count = stack.length;
    if (e > MAX) {
      return -1;
    }
    var setq = new Set([]);
    for (let i = 0; i < count; i++) {
      var de = stack.pop();
      if (de === e) {
        return answer;
      }
      for (var value of [de - 1, de + 1, de * 2]) {
        if (value > 0 && value <= MAX) {
          setq.add(value);
        }
      }
    }
    stack = Array.from(setq);
    answer += 1;
    e += cowMove;
    cowMove += 1;
  }
  return answer;
}
solution(10, 3);
