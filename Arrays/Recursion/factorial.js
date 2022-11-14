//Write a program to find the factorial of the given number A.

module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    return factorial(A);
  },
};

function factorial(A) {
  if (A == 0) return 1;
  return factorial(A - 1) * A;
}
