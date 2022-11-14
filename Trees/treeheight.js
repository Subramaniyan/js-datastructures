// You are given the root node of a binary tree A. You have to find the height of the given tree.

// A binary tree's height is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  height: function (node) {
    if (node == null) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  },
  solve: function (A) {
    return this.height(A);
  },
};
