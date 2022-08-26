module.exports = {
  //param A : array of integers
  //param B : array of array of integers
  //return a array of long integers
  rangeSum: function (A, B) {
    let pre = [];
    let ans = [];
    pre[0] = 0;
    for (let i = 1; i <= A.length; i++) {
      pre[i] = BigInt(pre[i - 1]) + BigInt(A[i - 1]);
    }

    for (let i = 0; i < B.length; i++) {
      ans.push(BigInt(pre[B[i][1]]) - BigInt(pre[B[i][0] - 1]));
    }
    return ans;
  },
};
