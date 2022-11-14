// You are given a singly linked list having head node A. You need to print the linked list in reverse order.

// Note :- The node values must be space separated. You must give a newline after printing all the nodes.

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  solve: function (A) {
    A = reverse(A);
    let temp = A;
    while (temp) {
      process.stdout.write(temp.data + ' ');
      temp = temp.next;
    }
    process.stdout.write('\n');
  },
};

function reverse(head) {
  let curr = head;
  let next = null;
  let prev = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  curr = prev;
  return curr;
}
