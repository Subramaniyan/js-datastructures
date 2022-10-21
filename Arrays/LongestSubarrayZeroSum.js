//Given an array A of N integers.

//Find the length of the longest subarray in the array which sums to zero.

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let n = A.length;
    let hashmap = new Map();
    let prefixSum = A[0];
    let ans = 0;
    hashmap[prefixSum] = 1;
    for (let i = 1; i < n; i++) {
      prefixSum = prefixSum + A[i];
      if (hashmap[prefixSum]) {
        ans = Math.max(ans, i - hashmap[prefixSum]);
      } else {
        prefixSum == 0 ? (ans = Math.max(ans, i - 0 + 1)) : ans;
        hashmap[prefixSum] = i;
      }
    }
    return ans;
  },
};
