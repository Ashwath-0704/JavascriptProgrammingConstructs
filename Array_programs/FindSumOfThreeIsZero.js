/**
 * @author Ashwath Naidu <ashwath.bly@gmail.com>
 * @version node: '16.13.2',
 * @version v8: '9.4.146.24-node.14',
 * 
 * @propose -> 4. Write a Program to show Sum of three Integer adds to ZERO
 * @param {*} Array -> takes Array input
 * @returns -> It returns the sum of element that equals to ZERO in String formate
 */

function sumOfThreeIntegerAddsToZero(Array) {
    let arr = []
    for (let i = 0; i < Array.length; i++) {
        const elementi = Array[i];
        for (let j = i + 1; j < Array.length; j++) {
            const elementj = Array[j];
            for (let k = j + 1; k < Array.length; k++) {
                const elementk = Array[k];
                if ((elementi + elementj + elementk) === 0) {
                    arr.push("[ (" + elementi + "  " + elementj + "  " + elementk + " ) = " + (elementi + elementj + elementk) + " ]");
                }
            }
        }
    }
    return console.log(arr);
}

sumOfThreeIntegerAddsToZero([0, -1, 2, -3, 1]); // [ '[ (0  -1  1 ) = 0 ]', '[ (2  -3  1 ) = 0 ]' ]

sumOfThreeIntegerAddsToZero([1, -2, 1, 0, 5]) // [ '[ (1  -2  1 ) = 0 ]' ]