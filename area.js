const side = document.querySelectorAll(".side")
const checkBtn = document.querySelector(".check-btn")
const output = document.querySelector(".output")

function calculatearea(){
    const area = (Number(side[0].value)*Number(side[1].value));
    output.innerText = "The Area of Rectangle is " + area +"cm²"
}
checkBtn.addEventListener("click",calculatearea)