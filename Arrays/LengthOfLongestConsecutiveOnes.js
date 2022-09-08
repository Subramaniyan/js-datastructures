module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let countOfOnes = 0;
    let ans = 0;
    let n = A.length;
    for (let i = 0; i < n; i++) {
      if (A[i] == 1) {
        countOfOnes = countOfOnes + 1;
      }
    }
    if (countOfOnes == n) return countOfOnes;
    for (let j = 0; j < n; j++) {
      let l = j - 1;
      let r = j + 1;
      let leftOne = 0;
      let rightOne = 0;
      if (A[j] == 0) {
        //checking for 1 to the left of the ith element until it has 0
        while (l >= 0) {
          if (A[l] == 1) {
            leftOne = leftOne + 1;
          } else {
            break;
          }
          l--;
        }
        //checking for 1 to the right of the ith element until it has 0
        while (r < n) {
          if (A[r] == 1) {
            rightOne = rightOne + 1;
          } else {
            break;
          }
          r++;
        }
      }
      //if there are only ones to the right and left then we cannot swap anything so l + r else l + r + 1
      if (leftOne + rightOne == countOfOnes)
        ans = Math.max(leftOne + rightOne, ans);
      else ans = Math.max(leftOne + rightOne + 1, ans);
    }
    return ans;
  },
};
