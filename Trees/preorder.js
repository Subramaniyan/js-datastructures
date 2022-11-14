// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers

  traverse: function (node, nodes) {
    if (node == null) {
      return;
    }
    nodes.push(node.data);
    this.traverse(node.left, nodes);
    this.traverse(node.right, nodes);
  },
  preorderTraversal: function (A) {
    let nodes = [];
    this.traverse(A, nodes);
    return nodes;
  },
};
