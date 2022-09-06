module.exports = {
  //param A : array of integers
  //return a long integers
  subarraySum: function (A) {
    let n = A.length;
    let ans = 0;
    for (let l = 0; l < n; l++) {
      ans = BigInt(ans) + BigInt(A[l]) * BigInt((l + 1) * (n - l));
    }
    return BigInt(ans);
  },
};

// sum of all subarray sums
