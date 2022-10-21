//Given an Array of integers B, and a target sum A.
//Check if there exists a pair (i,j) such that Bi + Bj = A and i!=j.

module.exports = {
  //param A : integer
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let n = B.length;
    let hashset = new Set();
    for (let i = 0; i < n; i++) {
      let x = BigInt(A) - B[i];
      if (hashset.has(x)) return 1;
      hashset.add(B[i]);
    }
    return 0;
  },
};
