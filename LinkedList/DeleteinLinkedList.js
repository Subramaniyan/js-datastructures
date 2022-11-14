// You are given the head of a linked list A and an integer B. Delete the B-th node from the linked list.

// Note : Follow 0-based indexing for the node numbering.

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  solve: function (A, B) {
    let tempk;
    let temp = A;
    if (B == 0) {
      temp = temp.next;
      A = temp;
      return A;
    }
    for (let i = 1; i <= B - 1; i++) {
      temp = temp.next;
    }
    tempk = temp.next.next;
    temp.next = tempk;
    return A;
  },
};
