//You are given an integer A, print 1 to A using using recursion.

module.exports = {
  //param A : integer
  solve: function (A) {
    printNumbers(A);
  },
};

function printNumbers(n) {
  var result;
  if (n <= 1) result = '1';
  else result = printNumbers(n - 1) + n;
  console.log(result + ' ');
}
