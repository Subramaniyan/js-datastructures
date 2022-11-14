//Given the root of a tree A with each node having a certain value, find the count of nodes with more value than all its ancestor.

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
    let target = Number.MIN_SAFE_INTEGER;
    return this.nodeCount(A, target);
  },
  nodeCount(root, target) {
    if (root == null) return;

    let counter = 0;

    if (root.data > target) {
      counter = counter + 1;
      target = root.data;
    }

    counter += this.nodeCount(root.left, target) || 0;
    counter += this.nodeCount(root.right, target) || 0;
    return counter;
  },
};
