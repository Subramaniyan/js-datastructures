//Given a number A, we need to find the sum of its digits using recursion.

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    return recursiveSum(A);
  },
};

function recursiveSum(A) {
  if (A == 0) return 0;
  let digit = A % 10;
  return digit + recursiveSum(Math.floor(A / 10));
}
