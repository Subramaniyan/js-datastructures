module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of integers
  //return an integer
  maxSubarray: function (A, B, C) {
    let maxSum = 0;
    for (let l = 0; l < A; l++) {
      let sum = 0;
      for (let r = l; r < A; r++) {
        sum = sum + parseInt(C[r]);
        if (sum <= B) {
          maxSum = maxSum < sum ? sum : maxSum;
        }
      }
    }
    return maxSum;
  },
};
