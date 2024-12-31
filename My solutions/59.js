console.log("Faulty Calculator")
let random = Math.random()
console.log(random)
let a = prompt("enter 1st number")
let c = prompt("enter Operation")
let b = prompt("enter 2nd number")
let obj = {

    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if(random>0.1)
{
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    console.log(`${eval(`${a} ${b} ${c}`)}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}