const inputs = document.querySelectorAll(".sides")
const checkBtn = document.querySelector(".check-btn")
const output = document.querySelector(".output")


function rectangle(Length, Breath) {
    const add = (Length == Breath);
    return add;
}
function calculateIsRectangle() {
    const sumofsides = rectangle(Number(inputs[0].value), Number(inputs[1].value));

    if (sumofsides == false) {
        output.innerText = "Yess!! It is Rectangle";
    }
    else {
        output.innerText = "Opps! It's not a rectangle ...Try another values of Length and Breath";

    }

}

checkBtn.addEventListener("click" , calculateIsRectangle)