/* function returnThing() {
const x = 8;
console.log(x);
}
const name="Nelson";
console.log ("fsf ${name}");
returnThing();
console.log("Hello World"); */

/* const x = 7;

function returnThing() {
    const x = 8;
    console.log(x);
}
returnThing();

const x = 2;
const y = 3;

funstion add(x, y) {
    console.log(x + y);
    return x + y;
} */
function rocket(P, B, D) {
    const badges = Math.floor(P / B);
    const leftover = P % B;
    const money = badges * D + leftover;
    console.log(money);
}
rocket(14, 3, 10);
