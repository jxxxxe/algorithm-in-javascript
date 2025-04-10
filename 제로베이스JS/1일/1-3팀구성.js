function solution(abilities, k) {
  var answer = 0;
  abilities.sort((a, b) => b - a); //

  if (abilities.length % 2 !== 0) {
    abilities.push(0);
  }
  var diff = [];
  for (let i = 0; i < abilities.length; i += 2) {
    //
    diff.push([abilities[i] - abilities[i + 1], i]); //
  }
  diff.sort((a, b) => b[0] - a[0]);

  var firstIndex = diff.slice(0, k).map((value) => value[1]); //

  for (let i = 0; i < abilities.length; i += 2) {
    if (firstIndex.includes(i)) {
      answer += abilities[i];
    } else {
      answer += abilities[i + 1];
    }
  }
  return answer;
}

solution([7, 6, 8, 9, 10], 1);
