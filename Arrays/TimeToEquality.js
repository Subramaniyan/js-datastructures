module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let length = A.length;
    let maximumElement = -Infinity;
    for (let i = 0; i < length; i++) {
      if (A[i] > maximumElement) {
        maximumElement = A[i];
      }
    }
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] != maximumElement) {
        A[i] = maximumElement - A[i];
        count = count + A[i];
      }
    }
    return count;
  },
};
