//Given an array of integers A and an integer B.

//Find the total number of subarrays having sum equals to B.

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
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
    let count = 0;
    count = A[0] == B ? (count = count + 1) : 0;
    while (l <= r && r < n) {
      if (l == 0) {
        sum = ps[r];
      } else {
        sum = ps[r] - ps[l - 1];
      }
      if (sum == B) {
        count = count + 1;
        if (r == n - 1) {
          l++;
          r = l + 1;
        } else {
          r++;
        }
      } else {
        if (r == n - 1) {
          l++;
          r = l + 1;
        } else {
          r++;
        }
      }
    }
    return count;
  },
};
