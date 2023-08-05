function solution(sequence, k) {
    var answer = [];
    var left=0;
    var right=0;
    var sum=sequence[left];
    
    while(left<sequence.length && right<sequence.length) {
        if(sum==k){
            if(answer.length==0 || answer[1]-answer[0] > right-left){
                answer=[left,right];
            }
            sum-=sequence[left];
            left++;
            right++;
            sum+=sequence[right];
        }
        else if(sum<k){
            right++;
            sum+=sequence[right];
        }
        else {
            sum-=sequence[left];
            left++;
        }
        
        
    }
    return answer;
}