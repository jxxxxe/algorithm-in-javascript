function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let weightsOnBridge = 0
    const trucksOnBridge = [] // [트럭무게, 이 트럭이 나갈 시간]을 담은 배열
    
    while(truck_weights.length || trucksOnBridge.length) {
        time++
        //맨 앞 트럭이 나갈 시간이면 빼준다
        if (trucksOnBridge[0] && time === trucksOnBridge[0][1]) {
            const outTruck = trucksOnBridge.shift()
            weightsOnBridge -= outTruck[0]
        }
        //트럭을 더 실을 수 있다면 올린다
        if (weightsOnBridge+truck_weights[0] <= weight) {
            const addedTruckWeight = truck_weights.shift()
            trucksOnBridge.push([addedTruckWeight, time+bridge_length])
            weightsOnBridge += addedTruckWeight
        } //트럭을 올릴 수 없다면, 맨 앞 트럭이 나가는 시간으로 시간이동
        else if (weightsOnBridge[0]){
            time = weightsOnBridge[0][1]-1
        }
    }
    
    return time
}