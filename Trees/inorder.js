// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  travers: function (node, nodes) {
    if (node == null) return;
    this.travers(node.left, nodes);
    nodes.push(node.data);
    this.travers(node.right, nodes);
  },
  inorderTraversal: function (A) {
    let nodes = [];
    this.travers(A, nodes);
    return nodes;
  },
};
