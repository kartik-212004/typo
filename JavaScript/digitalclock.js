let gethour = window.prompt("enter hours");
gethour = Number(gethour);
// console.log(gethour)
let getminutes = window.prompt("enter minutes");
getminutes = Number(getminutes)
let i = 0
document.getElementById("minutes").innerText = getminutes;
document.getElementById("hours").innerText = gethour;
if (gethour > 11) {
    document.getElementById("ap").innerText = "PM"
}
else {
    document.getElementById("ap").innerText = "AM"
}
let interval = setInterval(() => {
    i++;
    document.getElementById("minutes").innerText = getminutes;
    document.getElementById("hours").innerText = gethour;
    document.getElementById("seconds").innerText = i;
    if (i >= 60) {
        document.getElementById("seconds").innerText = 0;
        i = 0
        getminutes++;
        if (getminutes >= 60) {
            getminutes = 0;
            document.getElementById("minutes").innerText = 0;
            gethour++
            console.log(gethour)
            if (gethour > 11) {
                document.getElementById("ap").innerText = "PM"
            }
            else {
                document.getElementById("ap").innerText = "AM"
            }
            if (gethour >= 24) {
                gethour = 0;
                document.getElementById("hours").innerText = 0;
            }
        }
    }
}, 100)