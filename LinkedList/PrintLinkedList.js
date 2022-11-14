//You are given A which is the head of a linked list. Print the linked list in space separated manner.

//Note : The last node value must also be succeeded by a space and after printing the entire list you should print a new line

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  solve: function (A) {
    let temp = A;
    while (temp) {
      process.stdout.write(temp.data + ' ');
      temp = temp.next;
    }
    process.stdout.write('\n');
  },
};
