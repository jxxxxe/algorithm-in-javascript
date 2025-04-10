function solution(board) {
  var answer = 0;

  var start = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      //
      if (board[i][j] === 2) {
        start.push(i, j);
        break;
      }
    }
    if (start.length) {
      break;
    }
  }

  var deque = [[start[0], start[1], false]];
  isVisited = new Set([]);

  dx = [-1, 0, 1, 0];
  dy = [0, 1, 0, -1];
  var day = 1; //

  while (deque.length) {
    const curLen = deque.length;

    for (i = 0; i < curLen; i++) {
      var [curx, cury, has] = deque.shift();
      if (isVisited.has([curx, cury]) && !has) {
        continue;
      }
      for (j = 0; j < 4; j++) {
        var newx = curx + dx[j]; //
        var newy = cury + dy[j];

        if (
          newx >= 0 &&
          newx < board.length && //
          newy >= 0 &&
          newy < board[0].length &&
          board[newx][newy] !== 1
        ) {
          if (board[newx][newy] === 3 && has) {
            return day;
          } else if (board[newx][newy] === 3 && !has) {
            continue;
          }
          var newXY = [newx, newy, has];
          if (board[newx][newy] === 4) {
            board[newx][newy] = 0;
            newXY[2] = true;
          }

          isVisited.add([newx, newy]);
          deque.push(newXY);
        }
      }
    }
    day++;
  }

  return answer;
}

console.log(
  solution([
    [4, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0],
    [0, 2, 1, 1, 3, 0, 4, 0],
    [0, 0, 0, 4, 1, 1, 1, 0],
  ])
);
