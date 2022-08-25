module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let length = A.length;
    let maximumElement = -Infinity;
    let minimumElement = +Infinity;
    for (let i = 0; i < length; i++) {
      A[i] > maximumElement ? (maximumElement = A[i]) : maximumElement;
      A[i] > minimumElement ? minimumElement : (minimumElement = A[i]);
    }
    return parseInt(maximumElement) + parseInt(minimumElement);
  },
};
