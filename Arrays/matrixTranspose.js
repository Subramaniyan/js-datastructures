module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  solve: function (A) {
    let rowLength = A.length;
    let colLength = A[0].length;
    let transpose = [];
    for (let j = 0; j < colLength; j++) {
      transpose[j] = Array(transpose);
    }
    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        transpose[j][i] = A[i][j];
      }
    }
    return transpose;
  },
};
