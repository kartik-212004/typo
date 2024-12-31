function rcolor() {
    let v1 = Math.floor(0 + Math.random() * 225)
    let v2 = Math.floor(0 + Math.random() * 225)
    let v3 = Math.floor(0 + Math.random() * 225)
    return `rgb(${v1}, ${v2}, ${v3})`;
}
// document.getElementsByClassName("box").style.backgroundColor=rcolor()

let boxes = document.querySelectorAll(".box")
Array.from(boxes).forEach((element) => {
    // element.style.backgroundColor = rcolor()
    setInterval((e) => {
        element.style.backgroundColor = rcolor()

    }, 100);
})
