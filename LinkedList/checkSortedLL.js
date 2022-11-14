//You are given the head of a linked list A. Check if the data inside it exists in non-decreasing order.

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return an integer
  solve: function (A) {
    let temp = A;
    while (temp !== null) {
      let prevdata = temp.data;
      temp = temp.next;
      if (temp && prevdata > temp.data) {
        return 0;
      }
    }
    return 1;
  },
};
