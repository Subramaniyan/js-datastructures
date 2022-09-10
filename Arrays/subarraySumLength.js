module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  //Given an array A of length N. Also given are integers B and C.
  //Return 1 if there exists a subarray with length B having sum C and 0 otherwise
  solve: function (A, B, C) {
    let sum = 0;
    let n = A.length;
    let ans = 0;
    for (let i = 0; i < B; i++) {
      sum = parseInt(A[i]) + sum;
    }
    if (sum == C) {
      ans = ans + 1;
    }
    let r = B;
    let l = 1;
    while (r < n) {
      sum = sum - parseInt(A[l - 1]) + parseInt(A[r]);
      if (sum == C) {
        ans = ans + 1;
      }
      r++;
      l++;
    }
    return ans > 0 ? 1 : 0;
  },
};
