module.exports = {
  //param A : array of integers
  //param B : array of array of integers
  //return a array of integers
  solve: function (A, B) {
    let prefixSum = [];
    prefixSum[0] = A[0];
    for (let i = 1; i < A.length; i++) {
      if (i % 2 == 0) {
        prefixSum[i] = prefixSum[i - 1] + A[i];
      } else {
        prefixSum[i] = prefixSum[i - 1];
      }
    }
    let ans = [];
    for (let i = 0; i < B.length; i++) {
      if (B[i][0] == 0) ans.push(prefixSum[B[i][1]]);
      else ans.push(prefixSum[B[i][1]] - prefixSum[B[i][0] - 1]);
    }
    return ans;
  },
};
