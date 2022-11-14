module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    return magicNumber(A);
  },
};

function magicNumber(A) {
  let string = A.toString();
  let sum = 0;
  if (string.length == 1 && string != 0) return 0;
  for (let i = 0; i < string.length; i++) {
    sum = sum + parseInt(string[i]);
  }
  if (sum == 1) return 1;
  return magicNumber(sum);
}

//Given a number A, check if it is a magic number or not.

//A number is said to be a magic number if the sum of its digits is calculated till a single digit recursively by adding the sum of the digits after every addition. If the single digit comes out to be 1, then the number is a magic number.
