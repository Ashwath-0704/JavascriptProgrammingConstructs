/**
 * @author Ashwath Naidu <ashwath.bly@gmail.com>
 * @version node: '16.13.2',
 * @version v8: '9.4.146.24-node.14',
 * 
 *  1. Write a program in the following steps
 *  a. Generates 10 Random 3 Digit number.
 *  b. Store this random numbers into a array.
 *  c. Then find the 2nd largest and the 2nd smallest element without sorting the array. 
 */
let arrayOfNumber = new Array();
// a. Generates 10 Random 3 Digit number.
for (let numberOfLoop = 0; numberOfLoop < 10; numberOfLoop++) {
    let number = Math.floor((Math.random() * 1000) + 1);;
    arrayOfNumber.push(number);
}
console.log(arrayOfNumber); // Displaying the array of number 
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
arrayOfNumber.splice(arrayOfNumber.indexOf(Math.max.apply(-Infinity,arrayOfNumber)), 1);
 let second_max = Math.max.apply(null,arrayOfNumber)
 console.log("2nd largest element : "+second_max);
 arrayOfNumber.splice(arrayOfNumber.indexOf(Math.min.apply(Infinity,arrayOfNumber)), 1);
 let second_min = Math.min.apply(null,arrayOfNumber)
 console.log("2nd smallest element is : "+second_min+"\n");










