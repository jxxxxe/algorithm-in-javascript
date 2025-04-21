function solution(dice) {
  function combinations(arr, k) {
    const res = [];
    function dfs(start, comb) {
      if (comb.length === k) {
        res.push(comb.slice());
        return;
      }
      for (let i = start; i < arr.length; i++) {
        comb.push(arr[i]);
        dfs(i + 1, comb);
        comb.pop();
      }
    }
    dfs(0, []);
    return res;
  }

  function getAllSums(diceIdxs) {
    let sums = [0];
    for (const idx of diceIdxs) {
      const faces = dice[idx];
      const temp = [];
      for (const s of sums) {
        for (const f of faces) {
          temp.push(s + f);
        }
      }
      sums = temp;
    }
    return sums;
  }

  function countLess(arr, val) {
    let l = 0,
      r = arr.length;
    while (l < r) {
      const m = (l + r) >> 1;
      if (arr[m] < val) l = m + 1;
      else r = m;
    }
    return l;
  }

  const n = dice.length;
  const diceIdxs = Array.from({ length: n }, (_, i) => i);
  const choose = n / 2;
  let maxWin = -1;
  let best = [];

  for (const comb of combinations(diceIdxs, choose)) {
    const rest = diceIdxs.filter((x) => !comb.includes(x));
    const aSums = getAllSums(comb).sort((a, b) => a - b);
    const bSums = getAllSums(rest).sort((a, b) => a - b);

    let win = 0;
    for (const a of aSums) {
      win += countLess(bSums, a);
    }
    if (win > maxWin) {
      maxWin = win;
      best = comb.map((x) => x + 1).sort((a, b) => a - b);
    }
  }
  return best;
}
