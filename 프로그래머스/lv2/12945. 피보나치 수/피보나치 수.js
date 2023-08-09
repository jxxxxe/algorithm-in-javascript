function solution(n) {
    let a0 =0
    let a1 =1
    
    for (let i=2;i<=n;i++) {
        if(i%2==0){
            a0+=a1
            a0%=1234567
        }
        else {
            a1+=a0
            a1%=1234567
        }
    }
    
    return n%2==0 ? a0 : a1;
}