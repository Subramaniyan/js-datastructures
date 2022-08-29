module.exports = {
  //param A : array of integers
  //return a array of integers
  //Given an array of integers A, find and return the product array of the same size where the ith element of the product array will be equal to the product of all the elements divided by the ith element of the array.
  solve: function (A) {
    let prefixMultiplication = [];
    prefixMultiplication[0] = A[0];
    for (let i = 1; i < A.length; i++) {
      prefixMultiplication[i] = prefixMultiplication[i - 1] * A[i];
    }
    let ans = [];
    for (let i = 0; i < prefixMultiplication.length; i++) {
      ans[i] = prefixMultiplication[prefixMultiplication.length - 1] / A[i];
    }
    return ans;
  },
};
