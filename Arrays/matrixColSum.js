module.exports = {
  //param A : array of array of integers
  //return a array of integers
  solve: function (A) {
    let ans = [];
    let rowLength = A.length;
    let colLength = A[0].length;
    for (let j = 0; j < colLength; j++) {
      let sum = 0;
      for (let i = 0; i < rowLength; i++) {
        sum = sum + A[i][j];
      }
      ans.push(sum);
    }
    return ans;
  },
};
