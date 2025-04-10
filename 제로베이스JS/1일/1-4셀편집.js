function solution(arr, brr) {
  var answer = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== brr[i]) {
      answer += 1;
      arr[i + 1] -= brr[i] - arr[i];
    }
  }
  return answer;
}
