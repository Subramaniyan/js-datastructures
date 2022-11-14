// You are given the head of a linked list A and an integer B. You need to find the B-th element of the linked list.

// // Note : Follow 0-based indexing for the node numbering.

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
    let index = 0;
    while (temp !== null) {
      if (B == index) {
        return temp.data;
      }
      index++;
      temp = temp.next;
    }
  },
};
