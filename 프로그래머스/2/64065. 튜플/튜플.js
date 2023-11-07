function solution(s) {
    let sets = s.replace('{{','').replace('}}','').split('},{');
    const answer = []
    
    sets.sort((a,b) => a.length - b.length)
    
    for (let set of sets) {
        for (let elem of set.split(',')) {
            elem = parseInt(elem)
            if (!answer.includes(elem)) {
                answer.push(elem)
                break
            }
        }
    }
    
    return answer;
}