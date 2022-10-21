module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let hashmap = new Map();
    let n = A.length;
    let mod = 10 ** 9 + 7;
    let count = 0;
    for (let i = 0; i < n; i++) {
      hashmap[A[i]] ? hashmap[A[i]]++ : (hashmap[A[i]] = 1);
    }
    for (let i = 0; i < n; i++) {
      if (hashmap[A[i]]) {
        hashmap[A[i]]--;
      }
      let x = B - parseFloat(A[i]);
      if (hashmap[x]) {
        count = count + hashmap[x];
      }
    }
    return count % mod;
  },
};
