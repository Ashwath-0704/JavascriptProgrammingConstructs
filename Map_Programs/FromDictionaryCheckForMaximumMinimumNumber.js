/**
 * @author Ashwtah Naidu <ashwath.bly@gmail.com>
 * @version node: '16.13.2',
 * @version v8: '9.4.146.24-node.14',
 * 
 * @propose ->1. Write a program in the following steps
 *            a. Roll a die and find the number between 1 to 6
 *            b. Repeat the Die roll and find the result each time
 *            c. Store the result in a dictionary
 *            d. Repeat till any one of the number has reached 10 times
 *            e. Find the number that reached maximum times and the one that was for minimum times
 * @param {*} minimum 
 * @param {*} maximum 
 * @returns It returns the maximum and minimum number
 */
function randomNumber(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

function fromDictionaryCheckForMaximumMinimumNumber(minStartNumber, maxStartNumber) {
    let roll_map = new Map();
    let one = 0;
    let two = 0;
    let three = 0;
    let fore = 0;
    let five = 0;
    let six = 0;
    count = 0;
    while (roll_map.get(1) != 10 && roll_map.get(2) != 10 && roll_map.get(3) != 10 && roll_map.get(4) != 10 && roll_map.get(5) != 10 && roll_map.get(6) != 10) {

        let number = randomNumber(minStartNumber, maxStartNumber);

        switch (number) {
            case 1:
                one += number;
                roll_map.set(1, one)
                count++;
                break;
            case 2:
                two += number;
                roll_map.set(2, two)
                count++;
                break;
            case 3:
                three += number;
                roll_map.set(3, three)
                count++;
                break;
            case 4:
                fore += number;
                roll_map.set(4, fore)
                count++;
                break;
            case 5:
                five += number;
                roll_map.set(5, five)
                count++;
                break;
            case 6:
                six += number;
                roll_map.set(6, six)
                count++;
                break;
            default:
                break;
        }
    }
    console.log(roll_map); // { 2 => 2, 5 => 10, 1 => 2, 3 => 3 }

    let maxValue = Math.max.apply(null, Array.from(roll_map.values())); // maximum value from the dictionary
    let minValue = Math.min.apply(null, Array.from(roll_map.values())); // minimum value from the dictionary
    let maxKey, minKey;
    for (let [key, value] of roll_map.entries()) {
        if (value == maxValue) maxKey = "(" + key + ") reached maximum number of times";
        if (value == minValue) minKey = "(" + key + ") reached minimum number of times";
    }
    return maxKey +"  \n"+ minKey
}

console.log((fromDictionaryCheckForMaximumMinimumNumber(1, 6)));
// Output :- 
    //Map(4) { 3 => 9, 4 => 8, 1 => 4, 5 => 10 }
    // (5) reached maximum number of times  
    // (1) reached minimum number of times
