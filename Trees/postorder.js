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
    this.traverse(node.left, nodes);
    this.traverse(node.right, nodes);
    nodes.push(node.data);
  },
  postorderTraversal: function (A) {
    let nodes = [];
    this.traverse(A, nodes);
    return nodes;
  },
};
