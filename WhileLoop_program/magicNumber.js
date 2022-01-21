
const prompt = require("prompt-sync")();
console.log("Think of a numbe between 1 and 100");

let leftNumber = 0;
let reightNumber = 100;

while ((reightNumber - leftNumber) > 0) {

    let mid = ((leftNumber + reightNumber) / 2);

    let ch = prompt("Is" + mid + "your number? \n(yes or no)")

    if (ch==="yes") {
        console.log("Your number is : " + mid);
        break;
    } else {
        let ch2 = prompt("Is your number between " + leftNumber + " and " + reightNumber + " ?\n(yes or no)");
        if (ch2==="yes") {
            reightNumber = mid;
            //			leftNumber=0;
        } else {
            leftNumber = mid;
        }
    }
}