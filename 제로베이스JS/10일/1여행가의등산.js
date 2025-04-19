function solution(N, arr) {
  class PriorityQueue {
    constructor() {
      this.heap = [null];
    }

    push(item) {
      this.heap.push(item);
      this._bubbleUp();
    }

    pop() {
      if (this.heap.length === 1) return null;
      const top = this.heap[1];
      const end = this.heap.pop();
      if (this.heap.length > 1) {
        this.heap[1] = end;
        this._bubbleDown();
      }
      return top;
    }

    // 마지막 원소의 자리 찾기(나보다 작은 부모원소 찾을 때까지)
    _bubbleUp() {
      let idx = this.heap.length - 1;
      while (idx > 1) {
        const parentIdx = Math.floor(idx / 2);
        if (this.heap[parentIdx][0] < this.heap[idx][0]) break;
        [this.heap[idx], this.heap[parentIdx]] = [
          this.heap[parentIdx],
          this.heap[idx],
        ];
        idx = parentIdx;
      }
    }

    //첫 원소의 자리 찾기(나보다 큰 자식 원소들 찾을 때까지)
    _bubbleDown() {
      let idx = 1;
      while (true) {
        const [left, right] = [idx * 2, idx * 2 + 1];
        let smallestIdx = idx;

        if (left < this.heap.length && this.heap[idx] > this.heap[left]) {
          smallestIdx = left;
        }
        if (right < this.heap.length && this.heap[idx] > this.heap[right]) {
          smallestIdx = right;
        }

        if (smallestIdx === idx) {
          break;
        }

        [this.heap[idx], this.heap[smallestIdx]] = [
          this.heap[smallestIdx],
          this.heap[idx],
        ];
        idx = smallestIdx;
      }
    }

    isEmpty() {
      return this.heap.length === 1;
    }
  }

  var answer = Infinity;
  var dx = [-1, 0, 1, 0];
  var dy = [0, -1, 0, 1];
  var visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Infinity)
  );
  const heapq = new PriorityQueue();

  heapq.push([0, 0, 0]);

  while (!heapq.isEmpty()) {
    const [value, i, j] = heapq.pop();
    if (i === N - 1 && j === N - 1) {
      return value;
    }
    for (let k = 0; k < 4; k++) {
      const [newi, newj] = [i + dx[k], j + dy[k]];
      if (newi >= 0 && newi < N && newj >= 0 && newj < N) {
        const diff = Math.abs(arr[i][j] - arr[newi][newj]);
        const newValue = value + diff;
        if (visited[newi][newj] > newValue) {
          heapq.push([newValue, newi, newj]);
          visited[newi][newj] = newValue;
        }
      }
    }
  }

  return answer;
}

console.log(
  solution(5, [
    [0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1],
    [1, 4, 4, 4, 4],
    [1, 1, 4, 3, 3],
    [0, 1, 3, 1, 1],
  ])
);
