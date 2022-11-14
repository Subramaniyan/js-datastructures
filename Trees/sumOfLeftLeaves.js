// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  solve: function (A) {
    let sum = 0;
    return this.sumOfLeftLeaf(A, false, sum);
  },
  sumOfLeftLeaf(node, isLeft) {
    if (node == null) return 0;

    if (isLeft && node.left == null && node.right == null) {
      sum = sum + node.data;
      return sum;
    }

    if (node.left != null) this.sumOfLeftLeaf(node.left, true);
    if (node.right != null) this.sumOfLeftLeaf(node.right, false);
    return sum;
  },
};

//Given a binary tree, find and return the sum of node value of all left leaves in it.
