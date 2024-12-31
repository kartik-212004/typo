let image;
let value;
let button = document.getElementById("button");
let input = document.getElementById("input");
button.addEventListener("mouseover", mousein)
button.addEventListener("mouseout", mouseout)
function mousein() {
    button.style.backgroundColor = "orange";
}
function mouseout() {
    button.style.backgroundColor = "white"
}
button.onclick = () => {
    hello();
}
async function hello() {
    try {

        let value = input.value.toString().toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
        if (!response.ok) {
            throw new Error("must be a error");
        }
        let data = await response.json();
        image = await data.sprites.front_shiny;
        console.log(image)
        let img = document.getElementById("img");
        img.src = image;
        img.style.display = "grid";
    }
    catch (error) {
        console.log(error);
    }

}