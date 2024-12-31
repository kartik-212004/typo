function createcard(title, chnl, view, times, duration, thumbnail) {
    let view2
    if (view < 1000) {
        view2 = view
    }
    else if (view >= 1000 && view < 1000000) {
        view2 = view / 1000 + "k"
    }
    else if (view > 1000000) {
        view2 = view / 1000000 + "M"
    }
    let html = `<div class="container">
        <div class="box">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                    <div class="time">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${chnl} • ${view} views • ${times}</p>
            </div>
        </div>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}

// createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

let i 
for (i=1;i<=10;i++)
{
    createcard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
}