module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let hashmap = new Map();
    for (let i = 0; i < A.length; i++) {
      hashmap[A[i]] ? hashmap[A[i]]++ : (hashmap[A[i]] = 1);
    }
    let ans = [];
    for (let i = 0; i < B.length; i++) {
      ans.push(hashmap[B[i]] || 0);
    }
    return ans;
  },
};
