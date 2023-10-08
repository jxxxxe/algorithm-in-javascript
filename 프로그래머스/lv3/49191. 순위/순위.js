function solution(n, results) {
    let answer = 0;
    let record = new Array(n).fill(0).map(val => new Array(n).fill(0));    
    
    for (const result of results) {
        const [winner, looser] = result;
        
        record[winner-1][looser-1] = 1;
    }
            
    for (let i=0; i<n; i++) { 0
        for (let j=0; j<n; j++) { 1
            for (let k=0; k<n; k++) { 0
                if (record[j][i] && record[i][k]) {
                    record[j][k] = 1;
                }
            }
        }
    }
    
    console.log(record);
    
    for (let i=0;i<n;i++) {
        let sum = 0;
        for (let j=0; j<n; j++) {
            sum += record[i][j]+record[j][i];
        }
        if (sum === n-1) {
            answer++;
        }
    }
            

    return answer;
}