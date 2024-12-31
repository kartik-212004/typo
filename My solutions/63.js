console.log("array")
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 20]
console.log(arr)
console.log(arr.length)
console.log(arr.pop())
console.log("element")
console.log(arr.length)
console.log(arr.push("nigga"))
console.log(arr.length)
console.log(arr)
console.log(arr.toString())
console.log(arr)
console.log(arr.join(""))
console.log(arr.join("-"))
console.log(arr.shift())
console.log(arr.unshift("denigga"))
console.log(arr)

let d=[1,2,3,4,5,6,77,346,234,14346,47]
console.log(delete d[0])
console.log(d)
let n=[12,23,34,54,234,436,235,]
console.log(n)
console.log(n.splice(1,3))
console.log(n)
console.log(n.reverse())


let k=[12,23,34,45,56,76,87,98,53,46,57,68,97,80]
console.log(k)
const greaterThanSeven=(e)=>
{
    if(e>50)
    {
        return true
    }
    return false
}
console.log(k.filter(greaterThanSeven))

// reduce function
// 
// 
let ar=[1,2,3,4,5,6]
const r=(a,b)=>{
return a+b

}
console.log(ar.reduce(r))
