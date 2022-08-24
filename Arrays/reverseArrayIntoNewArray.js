module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
      let anotherArray = [];
      for (let i = A.length - 1; i >= 0; i--) {
          anotherArray.push(A[i])
      }
      return anotherArray;
  }
};