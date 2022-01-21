// Help user find degF or degC based on their Conversion Selection. Use
// Case Statement and ensure that the inputs are within the Freezing Point (
// 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
//          a. degF = (degC * 9/5) + 32
//          b. degC = (degF – 32) * 5/9

function findConversion() {

    const prompt = require("prompt-sync")();
    const choice = prompt("\nType 1 to convert from Fahrenheit to Celsius \nType 2 to convert from Celsius to Fahrenheit");
    let ft = 0.0;
    let ct = 0.0;

    switch (choice) {
        case "1":
            ft = prompt("Enter temperature in Fahrenheit: ");
            ct = 5 / 9.0 * (ft - 32);
            console.log("Temperature in Celsius: " + ct);
            break;

        case "2":
            ct = prompt("Enter temperature in Celsius:");
            ft = 1.8 * ct + 32;
            console.log("Temperature in Fahrenheit: " + ft);
            break;

        default:
            console.log("Incorrect Choice");
            break;
    }
}


findConversion();