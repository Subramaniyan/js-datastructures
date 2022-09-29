module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    A = A.sort((a, b) => a - b).reverse();
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
      ans = ans + A[i] * (i + 1);
    }
    return ans;
  },
};
