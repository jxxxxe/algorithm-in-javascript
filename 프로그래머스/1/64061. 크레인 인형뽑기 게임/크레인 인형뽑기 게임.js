function solution(board, moves) {
    var answer = 0;
    const stack  = []
    
    const moveStack = moves.reverse()
    
    while(moves.length) {
        const y = moveStack.pop()-1
        
        for(let x=0; x<board.length; x++) {
            if(board[x][y]) {
                if (stack.length && stack[stack.length-1] === board[x][y]) {
                    stack.pop()
                    answer+=2
                } else {
                    stack.push(board[x][y])
                }
                board[x][y] = 0
                break
            }
        }
    }
    return answer;
}