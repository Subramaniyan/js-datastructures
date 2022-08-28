module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let prefixSum = [];
    prefixSum[0] = A[0];
    for (let i = 1; i < A.length; i++) {
      prefixSum[i] = prefixSum[i - 1] + A[i];
    }
    let equilibriumIndex = -1;
    for (let i = 0; i < A.length; i++) {
      let sumLeft = 0;
      let sumRight = 0;
      if (i == 0) {
        sumLeft = 0;
      } else {
        sumLeft = prefixSum[i - 1];
      }
      sumRight = prefixSum[A.length - 1] - prefixSum[i];
      if (sumLeft == sumRight) {
        if (equilibriumIndex == -1) {
          equilibriumIndex = i;
        } else {
          equilibriumIndex < i ? equilibriumIndex : i;
        }
      }
    }
    return equilibriumIndex;
  },
};
