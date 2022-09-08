module.exports = {
  //param A : array of array of integers
  //return a array of integers
  solve: function (A) {
    let rowLength = A.length;
    let colLength = A[0].length;
    let ans = [];
    for (let i = 0; i < rowLength; i++) {
      let sum = 0;
      for (let j = 0; j < colLength; j++) {
        sum = sum + A[i][j];
      }
      ans.push(sum);
    }
    return ans;
  },
};
