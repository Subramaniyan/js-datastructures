//You are given an array A of N integers and an integer B. Count the number of pairs (i,j) such that A[i] - A[j] = B and i ≠ j. Since the answer can be very large, return the remainder after dividing the count with 109+7.

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let mod = 10 ** 9 + 7;
    let hashmap = new Map();
    let n = A.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      hashmap[A[i]] ? hashmap[A[i]]++ : (hashmap[A[i]] = 1);
    }
    for (let i = 0; i < n; i++) {
      let x = parseFloat(A[i]) - B;
      if (hashmap[x]) {
        count = count + hashmap[x];
      }
    }
    return count % mod;
  },
};
