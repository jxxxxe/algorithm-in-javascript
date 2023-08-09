function solution(n) {
    var answer = 0;
    
    let sum =0
    let left=0
    let right=0
    
    while(left!=n) {
        if(sum<n){
            sum+= ++right
        }
        if(sum > n){
            sum-= ++left
        }
        if(sum==n) {
            answer++
            sum+= ++right
        }
    }
    
    return answer;
}