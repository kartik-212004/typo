async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(24)
        }, 1000);
    })
}
// IIFE (IMMEDIATELY INVOKED FUNCTION)
(async function main() {
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()

// DESTRUCTURING
let [x, y, ...rest] = [10, 12, 12, 23, 435, 46, 356, 35, 25, 25]
console.log(x, y, rest)
console.log(rest[0])

// example
function sum(a, b, c)
{
    return a + b + c;
}
let arr = [1, 2, 3]
console.log(arr[0]+arr[1]+arr[2]);
// or 
console.log(sum(...arr))