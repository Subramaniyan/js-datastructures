module.exports = {
  //param A : integer
  //return a array of array of integers
  generateMatrix: function (A) {
    let i = 0;
    let j = 0;
    let spiralArray = new Array(A).fill().map(() => new Array(A).fill(''));
    let count = 0;
    while (A > 1) {
      for (let k = 1; k < A; k++) {
        count = count + 1;
        spiralArray[i][j] = count;
        j++;
      }
      for (let k = 1; k < A; k++) {
        count = count + 1;
        spiralArray[i][j] = count;
        i++;
      }
      for (let k = 1; k < A; k++) {
        count = count + 1;
        spiralArray[i][j] = count;
        j--;
      }
      for (let k = 1; k < A; k++) {
        count = count + 1;
        spiralArray[i][j] = count;
        i--;
      }
      i++;
      j++;
      A = A - 2;
    }
    if (A == 1) {
      spiralArray[i][j] = count + 1;
    }
    return spiralArray;
  },
};
