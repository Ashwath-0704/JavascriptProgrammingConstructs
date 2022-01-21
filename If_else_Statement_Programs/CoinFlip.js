
// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

function coinFlip() {
    let head = 1;
    let tail = 2;

    let floor = Math.floor(Math.random() * 2);

    if (floor === 0) {
        console.log("Its Head");
    } else if (floor === 1) {
        console.log("Its tail");
    }
}

coinFlip();