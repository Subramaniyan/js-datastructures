module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let hashmap = new Map();
    for (let i = 0; i < A.length; i++) {
      if (hashmap[A[i]]) {
        hashmap[A[i]]++;
      } else {
        hashmap[A[i]] = 1;
      }
    }
    let repeatingElements = -1;
    for (let i = 0; i < A.length; i++) {
      if (hashmap[A[i]] > 1) {
        repeatingElements = A[i];
        break;
      }
    }
    return repeaatingElements;
  },
};
