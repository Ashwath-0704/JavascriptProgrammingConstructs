
// Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let headCount = 0;
let tailCount = 0;

while (headCount != 11 && tailCount != 11) {
    let coin = Math.floor(Math.random() * 2);
    if (coin === 0) headCount++;
    else tailCount++;
}
if (headCount > tailCount) console.log("Head Wins");
else console.log("Tail Wins");