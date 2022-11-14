// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let temp = A;
    while (temp) {
      if (temp.data == B) {
        return 1;
      }
      temp = temp.next;
    }
    return 0;
  },
};

//You are given the head of a linked list A and an integer B, check if there is any node which contains this value B.

//Return 1 if such a node is present else return 0.
