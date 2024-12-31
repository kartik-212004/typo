function main() {
    let a = "kartik bhatt"
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    if(index<=a.length)
        {
            setTimeout(()=>{
                main()
            },3000)
        }
}
}
