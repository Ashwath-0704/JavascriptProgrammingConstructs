

function checkForPrimeNumber(Array) {
    let numArr = Array;
    for (let index of numArr) {

        if (index % 2 === 0) {
            console.log(index + " is not prime number");
        } else {
            console.log(index + " is prime number");
        }
    }
}

// Prime number 
checkForPrimeNumber(new Array(3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41));
// Not prime number 
checkForPrimeNumber(new Array(1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21));