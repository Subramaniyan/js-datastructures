// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function countPrimeNumber(A) {
  let primeCount = 0;
  let j = 1;
  while (j <= A) {
    let squareRoot = Math.sqrt(j);
    let count = 0;
    for (let i = 1; i <= squareRoot; i++) {
      if (j % i == 0) {
        if (i != squareRoot) {
          count = count + 2;
        } else {
          count++;
        }
      }
    }
    j++;
    count == 2 ? (primeCount = primeCount + 1) : primeCount;
  }
  return primeCount;
}

countPrimeNumber(10);
