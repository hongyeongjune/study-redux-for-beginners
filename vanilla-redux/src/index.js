const add = document.getElementById("add");
const minus = document.getElementById("minus");
const text = document.querySelector("span");

let count = 0;

text.innerText = count;

const updateText = () => {
    text.innerText = count;
}

add.addEventListener("click", () => {
    count += 1;
    updateText();
})

minus.addEventListener("click", () => {
    count -= 1;
    updateText();
})