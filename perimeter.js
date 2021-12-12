const side = document.querySelectorAll(".side")
const checkBtn = document.querySelector(".check-btn")
const output = document.querySelector(".output")

function calculateperi(){
    const peri = 2(Number(side[0].value)+Number(side[1].value));
    output.innerText = "The Perimeter of Rectangle is " + peri +"cm"
}
checkBtn.addEventListener("click",calculateperi)