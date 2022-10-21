module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let n = A.length;
    let hashMap = new Map();
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (hashMap[A[i]]) {
        count = hashMap[A[i]] == 1 ? (count = count - 1) : count;
        hashMap[A[i]]++;
      } else {
        hashMap[A[i]] = 1;
        count = count + 1;
      }
    }
    return count;
  },
};
