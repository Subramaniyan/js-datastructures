//You are given A which is the head of a linked list. Also given is the value B and position C. Complete the function that should insert a new node with the said value at the given position.

//Notes:

// In case the position is more than length of linked list, simply insert the new node at the tail only.
// In case the pos is 0 or less, simply insert the new node at head only.
// Follow 0-based indexing for the node numbering.
// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //param C : integer
  //return the head node in the linked list
  solve: function (A, C, B) {
    if (B == 0) {
      let temp = new Node(C);
      temp.next = A;
      A = temp;
      return A;
    }
    let size = sizeOfLL(A);
    if (B < sizeOfLL(A)) B = size + 1;
    let temp = A;
    for (let i = 1; i <= B - 1; i++) {
      if (temp.next) {
        temp = temp.next;
      } else {
        let tempk = new Node(C);
        temp.next = tempk;
        return A;
      }
    }
    let tempk = new Node(C);
    tempk.next = temp.next;
    temp.next = tempk;
    return A;
  },
};

function sizeOfLL(head) {
  let temp = head;
  let count = 0;
  while (temp) {
    temp = temp.next;
    count = count + 1;
  }
}
