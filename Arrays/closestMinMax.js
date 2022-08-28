module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let minIndex = -1;
    let maxIndex = -1;
    let ans = +Infinity;
    let maxElement = -Infinity;
    let minElement = +Infinity;
    for (let i = 0; i < A.length; i++) {
      if (A[i] > maxElement) {
        maxElement = A[i];
      } else if (A[i] < minElement) {
        minElement = A[i];
      }
    }
    if (minElement == maxElement) {
      return 1;
    }
    for (let i = 0; i < A.length; i++) {
      if (A[i] == minElement) {
        if (maxIndex != -1) {
          ans = Math.min(ans, i - maxIndex + 1);
        }
        minIndex = i;
      }
      if (A[i] == maxElement) {
        if (minIndex != -1) {
          ans = Math.min(ans, i - minIndex + 1);
        }
        maxIndex = i;
      }
    }
    return ans;
  },
};
