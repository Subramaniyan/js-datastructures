//Given the root of a binary tree A. Return the sum of all the nodes of the binary tree.

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  count: function (node) {
    if (node == null) return 0;
    return node.data + this.count(node.left) + this.count(node.right);
  },
  solve: function (A) {
    return this.count(A);
  },
};
