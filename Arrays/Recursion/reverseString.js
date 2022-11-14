//Write a recursive function that, given a string S, prints the characters of S in reverse order.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  // send the input string as a argument in main funtion
  main(inputString[0]);
});

function main(A) {
  // Write your code here
  // Use console.log to output the result

  if (A.length == 0) {
    return;
  }

  // use process.stdout instead of console.log to write the characters on same line
  process.stdout.write(A.charAt(A.length - 1));

  //   recursively call the main function with arguments
  return main(A.slice(0, A.length - 1));
}
