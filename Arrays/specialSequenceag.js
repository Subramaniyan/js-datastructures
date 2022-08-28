module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let countOFG = 0;
    let ans = 0;
    for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] == 'G') {
        countOFG = countOFG + 1;
      } else if (A[i] == 'A') {
        ans = ans + countOFG;
      }
    }
    return ans;
  },
};
