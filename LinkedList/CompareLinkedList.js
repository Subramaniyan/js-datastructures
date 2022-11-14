// Given heads of two linked lists A and B, check if they are identical i.e. each of their corresponding nodes should contain the same data. The two given linked lists may or may not be of the same length.

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return an integer
  solve: function (A, B) {
    let temp = A;
    let temp1 = B;
    while (temp !== null || temp1 !== null) {
      if (temp == null || temp1 == null) return 0;
      if (temp.value != temp1.value) {
        return 0;
      }
      temp = temp.next;
      temp1 = temp1.next;
    }
    return 1;
  },
};
