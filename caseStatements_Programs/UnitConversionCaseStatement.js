// Write a program that takes User Inputs and does Unit Conversion of
// different Length units
// 1. Feet to Inch           3. Inch to Feet
// 2. Feet to Meter          4. Meter to Feet

function unitConversion(number, unit) {
    // var customerName = prompt("Please enter your name", "<name goes here>");
    let number1 = number;
    let units = unit;
    switch (units) {
        case "feetToInch":
            let feetToInch = number1 * 12;
            console.log(feetToInch);
            break;
        case "feetToMeter":
            let feetToMeter = number1 / 3.2808;
            console.log(feetToMeter);
            break;
        case "InchToFeet":
            let InchToFeet = number1 * 0.083333;
            console.log(InchToFeet);
            break;
        case "MeterToFeet":
            let MeterToFeet = number1 * 3.2808;
            console.log(MeterToFeet);
            break;
        default:
            break;
    }
}

unitConversion(10, "InchToFeet");

