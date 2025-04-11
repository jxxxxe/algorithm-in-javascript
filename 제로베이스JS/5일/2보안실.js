function solution(names, times) {
  var answer = [];
  var dict = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (!(name in dict)) {
      dict[name] = [];
    }
    dict[name].push(times[i]);
  }

  for (let name of Object.keys(dict)) {
    var mTimes = [];
    dict[name].sort();
    for (let time of dict[name]) {
      const [h, m] = time.split(":");
      mTimes.push(Number(h) * 60 + Number(m));

      if (
        mTimes.length >= 3 &&
        mTimes[mTimes.length - 1] - mTimes[mTimes.length - 3] <= 60
      ) {
        answer.push(name);
        break;
      }
    }
  }

  answer.sort();
  return answer;
}

console.log(
  solution(
    ["yaniel", "yaniel", "yaniel", "luis", "luis", "luis", "luis"],
    ["10:21", "10:40", "11:21", "09:00", "09:12", "10:09", "10:12"]
  )
);
