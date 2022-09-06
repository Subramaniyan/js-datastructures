module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return a array of integers
  solve: function (A, B, C) {
    let subArray = [];
    for (let i = B; i <= C; i++) {
      subArray.push(A[i]);
    }
    return subArray;
  },
};
