const a=[10,12,23,34,52,24]
let k= "kartik"
const b=[1530,23512,23523,2534,2552,2524]
let e
a.forEach(e=>{
    console.log(e)
})
for (const c of b) {
    console.log(c)
}
for (const key in k) {
        const element = k[key];   
        console.log(key)
    }
    Array.from(k).forEach((e)=>{
        console.log(e)
    })
    let text = ["Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]
    for (const item of text) {
        console.log(item)
    }
    for (const key in text) {
        console.log(key)
    }