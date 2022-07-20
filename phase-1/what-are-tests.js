/*
    Write a function that takes two numbers returns the sum
    2 + 3 = 5
    6 + 7 = 13
*/

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}
function primeCheck(n) {
    let isPrime = true;
    if (n===1){
        return "1 is neither prime nor composite number.";
    } else if (n>1) {
        for(let i=2; i<n; i++){
            if(n%i===0){
                isPrime = false;
                break;
            }
        } if(isPrime) {
            return true;
        } else {
            return false;
        }
    } else if (n<0) {
        return console.error("Enter a positive number.");
    }
}

function palindromeChecker(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }




// module.exports = add;
// module.exports = palindromeChecker;
// module.exports = primeCheck;

module.exports = {add, palindromeChecker, primeCheck};

console.log(palindromeChecker("A man, a plan, a canal. Panama"));