module.exports = {
  //param A : array of integers
  //return an integer

  //formula = numberofelements - count of maximum element
  //example A = [3, 1, 2] - count 2 - The elements that have at least 1 element greater than itself are 1 and 2
  solve: function (A) {
    let maximumElement = -Infinity;
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      if (maximumElement < A[i]) {
        maximumElement = A[i];
        count = 1;
      } else if (maximumElement == A[i]) {
        count++;
      }
    }
    return A.length - count;
  },
};
