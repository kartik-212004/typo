let a = [12, 24, 35, 24, 643, 63, 234, 54, 23]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element**2)
}
a.forEach((value, index, Array) => {
    console.log(value, index, Array)
})
let obj = {
    a: 1,
    b: 2,
    c: 3,
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
    }
}


let ar = [13, 34, 5463, 234, 543, 4, 235, 65, 625, 32543, 643]
console.log(ar)
let nar = []
for (let index = 0; index < ar.length; index++) {
    // const element = ar[index];
    nar.push(ar[index])
}
console.log(nar)
console.log(nar.push(69))
console.log(nar)
