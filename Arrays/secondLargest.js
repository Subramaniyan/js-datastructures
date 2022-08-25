module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
      let length = A.length;
      if(A.length == 1) return -1
      let maximumElement = -Infinity
      let secondLargest = -Infinity
      for (let i = 0; i < length; i++) {
          if (A[i] >= maximumElement) {
              maximumElement = A[i]
          }
      }
      let index = A.indexOf(maximumElement)
      A.splice(index, 1)
      for (let i = 0; i < length; i++) {
          if (A[i] <= maximumElement) {
              if (A[i] > secondLargest) {
                  secondLargest = A[i]
              }
          }

      }
      return parseInt(secondLargest)
  }
};
