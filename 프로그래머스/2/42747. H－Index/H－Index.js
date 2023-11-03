function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b) => b-a)
    
    for (let i=0; i<citations.length; i++) {
        if (citations[i] <= i+1) {
            return Math.max(citations[i], i)
        }
    }
    
    return citations.length
}