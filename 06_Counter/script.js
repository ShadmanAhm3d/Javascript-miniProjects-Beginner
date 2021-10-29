let counter = document.getElementById("Counter");
let Increase = document.getElementById("increase");
let Decrease = document.getElementById("decrease");
let Reset = document.getElementById("reset");
let value = 0;

Increase.addEventListener("click" , () =>{
    value++;
    counter.textContent = value;
})


Decrease.addEventListener("click" , () =>{
    value--;
    counter.textContent = value;
})


reset.addEventListener("click" , () =>{
    value = 0;
    counter.textContent = value;
})
