//Implement pow(A, B) % C.In other words, given A, B and C, Find (AB % C).Note: The remainders on division cannot be negative. In other words, make sure the answer you return is non-negative.

module.exports = {
  pow: function (A, B, C) {
    A = BigInt(A);
    C = BigInt(C);
    let ans = this.power(A, B, C);
    if (ans < BigInt(0)) ans = (ans + C) % C;
    return Number(ans);
  },
  power: function (A, B, C) {
    if (B === 0) return BigInt(1) % C;
    let p = this.power(A % C, Math.floor(B / 2), C) % C;
    if (B % 2) {
      return (((p * p) % C) * (A % C)) % C;
    } else {
      return (p * p) % C;
    }
  },
};
