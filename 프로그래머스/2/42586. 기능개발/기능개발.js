function solution(progresses, speeds) {
    var answer = [];
    
    while (progresses.length) {
        answer.push(0)
        const neededDays1 = Math.ceil((100-progresses[0])/speeds[0])
        progresses = progresses.map((progress,idx) => progress+speeds[idx]*neededDays1)

        while (progresses[0] >= 100) {
            progresses.shift()
            speeds.shift()
            answer[answer.length-1]++
        }
    }
    
    return answer;
} 