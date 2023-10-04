function solution(maps) {
    var step = 1;
    let visitedMaps = maps;
    const finish = [maps.length-1, maps[0].length-1];
    let bfsQueue = [[0,0]];
    let next = [[1,0],[-1,0],[0,1],[0,-1]];
    
    visitedMaps[0][0] = 2;
    
    while (bfsQueue.length) {
        
        const queueSize = bfsQueue.length;
        
        for (let i=0; i<queueSize; i++) {
            const [x,y] = bfsQueue.shift();
            
            for (let i=0; i<4; i++){
                const nextX = x+next[i][0];
                const nextY = y+next[i][1];
                
                if (nextX>=0 && nextY>=0 && nextX<=finish[0] && nextY<=finish[1] && visitedMaps[nextX][nextY] != 2 && visitedMaps[nextX][nextY] != 0) {
                    if (nextX===finish[0] && nextY===finish[1]) {
                        return step+1;
                    }
                    
                    visitedMaps[nextX][nextY] = 2;
                    
                    bfsQueue.push([nextX,nextY]);
                    
                }
            }
        }
        
        step++;
    }
    
    return -1;
}