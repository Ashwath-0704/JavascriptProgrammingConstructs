/**
 * @author Ashwath Naidu <ashwath.bly@gmail.com>
 * @version node: '16.13.2',
 * @version v8: '9.4.146.24-node.14',
 * 
 * @propose -> 2. Extend the above program to sort the array and then find the 2nd largest
 *          and the 2nd smallest element.
 */

function findSecondSmallestLargestNumberSortedArray(size) {
    let arrayOfNumber = new Array();
    // a. Generates 10 Random 3 Digit number.
    for (let numberOfLoop = 0; numberOfLoop < 10; numberOfLoop++) {
        let number = Math.floor((Math.random() * size) + 1);
        arrayOfNumber.push(number);
    }
    let sortedArrayONumbers = arrayOfNumber.sort(); // sorted Array 
    console.log(sortedArrayONumbers); // Displaying the array of number 
    // c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
    sortedArrayONumbers.splice(sortedArrayONumbers.indexOf(Math.max.apply(null, sortedArrayONumbers)), 1);
    let second_max = Math.max.apply(null, sortedArrayONumbers)
    console.log("2nd largest element : " + second_max);
    sortedArrayONumbers.splice(sortedArrayONumbers.indexOf(Math.min.apply(null, sortedArrayONumbers)), 1);
    let second_min = Math.min.apply(null, sortedArrayONumbers)
    console.log("2nd smallest element is : " + second_min + "\n");
}

console.log(findSecondSmallestLargestNumberSortedArray(1000));





