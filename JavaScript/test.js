let image;
let value;
let button = document.getElementById("button");
let input = document.getElementById("input");

button.addEventListener("mouseover", mousein);
button.addEventListener("mouseout", mouseout);

function mousein() {
    button.style.backgroundColor = "orange";
}

function mouseout() {
    button.style.backgroundColor = "white";
}

button.onclick = () => {
    hello();
};

async function hello() {
    // Without try...catch block

    let value = input.value.toString().toLowerCase();
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
    
    // If response.ok is not checked and response status is not successful,
    // the following operations may lead to unhandled errors:
    let data = await response.json();
    image = await data.sprites.front_shiny;
    console.log(image);
    
    let img = document.getElementById("img");
    img.src = image;
    img.style.display = "grid";
    // Without catch block, any errors occurring above won't be caught or logged
}
