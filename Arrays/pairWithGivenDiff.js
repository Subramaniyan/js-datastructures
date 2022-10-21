//Given an one-dimensional unsorted array A containing N integers.

//You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.

//Return 1 if any such pair exists else return 0.

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let mod = 10 ** 9 + 7;
    let hashmap = new Map();
    let n = A.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
      hashmap[A[i]] ? hashmap[A[i]]++ : (hashmap[A[i]] = 1);
    }
    for (let i = 0; i < n; i++) {
      let x = A[i] - B;
      if (x == A[i] && hashmap[x]) hashmap[A[i]]--;
      if (hashmap[x]) {
        count = count + hashmap[x];
      }
    }
    return count > 0 ? 1 : 0;
  },
};
