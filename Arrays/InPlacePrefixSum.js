module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    for (let i = 0; i < A.length; i++) {
      if (i != 0) {
        A[i] = A[i - 1] + A[i];
      }
    }
    return A;
  },
};
