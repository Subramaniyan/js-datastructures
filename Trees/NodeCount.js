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
    return 1 + this.count(node.left) + this.count(node.right);
  },
  solve: function (A) {
    return this.count(A);
  },
};

//You are given the root node of a binary tree A. You have to find the number of nodes in this tree.
