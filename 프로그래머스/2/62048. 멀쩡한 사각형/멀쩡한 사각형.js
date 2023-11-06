function solution(w, h) {
    var notIncludedCout = 0;
    let prevY = 0
    
    for (let x=1; x<=w; x++) {
        const y = h*x/w
        
        notIncludedCout += Math.ceil(y)-Math.floor(prevY)
                      
        prevY = y
    }
    
    return w*h - notIncludedCout;
}