function solution(triangle) {
    let answer = [[triangle[0][0]]];
    
    for (let level=1; level<triangle.length; level++) {
        answer[level] = [];
        for (let j=0; j<=level; j++) {
            if (j === 0) {
                answer[level].push(triangle[level][j]+answer[level-1][0])
            } else if (j === level) {
                answer[level].push(triangle[level][j]+answer[level-1][level-1])
            } else {
                answer[level].push(triangle[level][j]+Math.max(answer[level-1][j-1],answer[level-1][j]))
            }
        }
    }
            
    return Math.max(...answer[answer.length-1]);
}