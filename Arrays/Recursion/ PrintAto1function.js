//You are given an integer A, print A to 1 using using recursion.

module.exports = {
  //param A : integer
  solve: function (A) {
    printReverserecursion(A);
    console.log('\n');
  },
};

function printReverserecursion(A) {
  if (A == 0) {
    return;
  }
  console.log(A + ' ');
  printReverserecursion(A - 1);
}
