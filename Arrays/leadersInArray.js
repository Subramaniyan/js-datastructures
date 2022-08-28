module.exports = {
  //param A : array of integers
  //return a array of integers
  //use carryforwar method
  //iterate from the last, check for leaders from the previous leader.
  // A = [16, 17, 4, 3, 5, 2]
  //2 is always a leader and 5 is a leader(5 > 2). now 5 is the leader 3 < 5 so leader remains same next 4 < 5 so leader remains same 17 > 5 so now the leader changes.
  solve: function (A) {
    let lastLeader = -Infinity;
    for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] > lastLeader) {
        lastLeader = A[i];
      } else {
        A.splice(i, 1);
      }
    }
    return A;
  },
};
