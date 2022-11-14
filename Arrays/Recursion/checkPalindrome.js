//Write a recursive function that checks whether string A is a palindrome or Not.Return 1 if the string A is a palindrome, else return 0.Note: A palindrome is a string that's the same when read forward and backward.

module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
      let n = A.length;
      return recursivePalindrome(A, 0, n - 1);
  }
};
function recursivePalindrome(A, s, e) {
  if (s >= e) return 1;
  if (A[s] == A[e] && recursivePalindrome(A, s + 1, e - 1) == 1) {
      return 1
  }
  return 0
}
