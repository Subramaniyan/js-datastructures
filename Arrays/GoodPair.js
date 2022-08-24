module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer

  //the same element cannot be paired to get B so 0,0 ,1,1 ... can be eliminated.
  //A = [1,2,3,4] B = 7  (i,j) = (3,4)
  //0, 1 and 1, 0 will be same 0, 1 = 1 and 1, 0 = 1 so only one pair can be eliminated from the iteration
  //for more understanding make a diagram from column to rowth iteration of i and j
  solve: function (A, B) {
    let n = A.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if (A[i] + A[j] == B) return 1;
      }
    }
    return 0;
  },
};
