module.exports = {
  //param A : array of integers
  //return an integer
  //Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.
  solve: function (A) {
    let pse = [];
    let pso = [];
    let so = 0;
    let se = 0;
    let n = A.length;
    let count = 0;
    pse[0] = A[0];
    pso[0] = 0;
    for (let i = 1; i < n; i++) {
      if (i % 2 == 0) {
        pse[i] = pse[i - 1] + A[i];
        pso[i] = pso[i - 1];
      } else {
        pso[i] = pso[i - 1] + A[i];
        pse[i] = pse[i - 1];
      }
    }
    for (let i = 0; i < n; i++) {
      so = i == 0 ? 0 + pse[n - 1] - pse[i] : pso[i - 1] + pse[n - 1] - pse[i];
      se = i == 0 ? 0 + pso[n - 1] - pso[i] : pse[i - 1] + pso[n - 1] - pso[i];
      if (se == so) {
        count++;
      }
    }
    return count;
  },
};
