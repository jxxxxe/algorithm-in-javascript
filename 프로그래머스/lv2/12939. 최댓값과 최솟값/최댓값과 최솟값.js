function solution(s) {
    var answer = '';
    let numArr = s.split(" ")
    let min = parseInt(numArr[0],10)
    let max = parseInt(numArr[0],10)
    
    for (num of numArr) {
        if (min > num) {
            min = parseInt(num,10)
        }
        else if(max < num) {
            max = parseInt(num,10)
        }
    }
    return min+" "+max;
}