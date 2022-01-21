
// Enter 3 Numbers do following arithmetic operation and find the one that
// is maximum and minimum

// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c

function findTheArithmeticOperation(int1, int2, int3) {

    let operation1 = (int1 + int2) * int3;
    let operation2 = (int1 % int2) + int3;
    let operation3 = (int3 + int1) / int2;
    let operation4 = (int1 + int2) + int3;

    console.log("\n[" + operation1 + " " + operation2 + " " + operation3 + " " + operation4 + "]");

    let max = operation1;
    let min = operation1;

    if (operation1 < operation2 && operation2 > operation3 && operation2 > operation4) {
        max = operation2;
    } else if (operation3 > operation1 && operation3 > operation2 && operation3 > operation4) {
        max = operation3
    } else if (operation4 > operation1 && operation4 > operation2 && operation4 > operation3) {
        max = operation4;
    }

    if (operation1 > operation2 && operation2 < operation3 && operation2 < operation4) {
        min = operation2;
    } else if (operation3 < operation1 && operation3 < operation2 && operation3 < operation4) {
        min = operation3
    } else if (operation4 < operation1 && operation4 < operation2 && operation4 < operation3) {
        min = operation4;
    }
    console.log("\nmin ->" + min);
    console.log("max ->" + max + "\n");
}

findTheArithmeticOperation(10, 0.1, 10);