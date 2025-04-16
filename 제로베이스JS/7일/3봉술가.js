//10분
function solution(N, board) {
  var answer = [];
  var gs = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "G") {
        gs.push([i, j]);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      var distance = [];
      if (board[i][j] === "G") {
        continue;
      }
      for (let [x, y] of gs) {
        distance.push(Math.abs(x - i) + Math.abs(y - j));
      }
      var minDis = Math.min(...distance);
      if (!answer.length || answer[1] < minDis) {
        answer = [[i, j], minDis];
      }
    }
  }
  return answer[0];
}
