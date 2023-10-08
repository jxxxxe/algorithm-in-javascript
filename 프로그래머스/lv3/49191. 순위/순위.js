function solution(n, results) {
    let answer = 0;
    let record = new Array(n).fill(0).map(val => new Array(n).fill(0));

    // let record = new Array(n).fill(new Array(n).fill(0));
    // => 잘못된 코드, 같은 배열(new Array(n).fill(0))로 0~n-1행이 채워짐
    
    
    for (const result of results) {
        const [winner, looser] = result;
        
        record[winner-1][looser-1] = 1;
    }
    
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            for (let k=0; k<n; k++) {
                if (record[i][j] && record[i][j] === record[j][k]) {
                    record[i][k] = 1;
                }
            }
        }
    }
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            for (let k=0; k<n; k++) {
                if (record[i][j] && record[i][j] === record[j][k]) {
                    record[i][k] = 1;
                }
            }
        }
    }
    
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