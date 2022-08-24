const inc = document.getElementById("increase");
const reset = document.getElementById("reset");
const dec =document.getElementById("decrease");
const count = document.getElementById("count")

let number = 0

inc.addEventListener("click", () => {

    number = number+1
    count.textContent = number  
})

dec.addEventListener("click", decrease);

function decrease(){
    number = number -1
    count.textContent = number  
}

reset.addEventListener("click", restart);

function  restart(){
    number = 0
    count.textContent = number  
}
