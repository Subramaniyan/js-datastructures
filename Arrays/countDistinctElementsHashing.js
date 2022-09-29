module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let hashset = new Set();
    for (let i = 0; i < A.length; i++) {
      hashset.add(A[i]);
    }
    return hashset.size;
  },
};
