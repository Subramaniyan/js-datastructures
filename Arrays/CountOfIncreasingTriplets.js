module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let n = A.length;
    let tripletCount = 0;
    for (let i = 1; i < n; i++) {
      let left = 0;
      let right = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (A[i] > A[j]) left++;
      }
      for (let j = i + 1; j < n; j++) {
        if (A[i] < A[j]) right++;
      }
      tripletCount = tripletCount + left * right;
    }
    return tripletCount;
  },
};
