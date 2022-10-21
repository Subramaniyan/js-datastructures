module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let n = A.length;
    let count = 0;
    let hashmap1 = new Map();
    for (let i = 0; i < n; i++) {
      let xorResult = A[i] ^ B;
      if (hashmap1.has(xorResult)) {
        count = count + 1;
      } else {
        hashmap1.set(A[i], i);
      }
    }
    return count;
  },
};
