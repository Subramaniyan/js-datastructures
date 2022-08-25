module.exports = { 
  //param A : array of integers
  //param B : integer
  //return an integer
   solve : function(A, B){
     let length = A.length;
     let count = 0;
     for(let i=0; i<length; i++) {
       if(A[i] == B) {
         count = count + 1
       }
     }
     return count;
   }
 };
 