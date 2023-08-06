function solution(s) {
    var answer=''
    for (let i=0;i<s.length;i++) {
        if(typeof(s[i])=="string" && (i==0 || s[i-1]==" ")){
           answer+=s[i].toUpperCase()
         }
        else {
            answer+=s[i].toLowerCase()
        }
    }
    return answer;
}