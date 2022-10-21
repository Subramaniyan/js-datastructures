//Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.

//If the answer does not exist return an array with a single element "-1".

//First sub-array means the sub-array for which starting index in minimum.

module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  solve: function (A, B) {
    let n = A.length;
    let ps = [];
    ps[0] = A[0];
    for (let i = 1; i < n; i++) {
      ps[i] = A[i] + ps[i - 1];
    }
    let l = 0;
    let r = 1;
    let sum = 0;

    while (l <= r && r < n) {
      if (l == 0) {
        sum = ps[r];
      } else {
        sum = ps[r] - ps[l - 1];
      }
      if (sum == B) return createSumSubArray(l, r, A);
      else if (sum < B) {
        r++;
      } else {
        l++;
      }
    }
    return [-1];
  },
};

function createSumSubArray(l, r, A) {
  let subArrayRes = [];
  for (let i = l; i <= r; i++) {
    subArrayRes.push(A[i]);
  }
  return subArrayRes;
}
