
function check_Palindrome(number) {

    const prompt = require("prompt-sync")();
    let rev = "";
    let original = number;

    let length = original.length;

    for (i = length - 1; i >= 0; i--) {
        rev = rev + original.charAt(i);
    }
    // we are compareing b/w the revarsed number/string with original number/string.
    if (original === rev) {
        console.log("Entered string/number is a palindrome.");
    }
    else {
        console.log("Entered string/number is not a palindrome.");
    }
}

check_Palindrome("121");
