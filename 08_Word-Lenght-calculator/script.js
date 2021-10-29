let inputarea = document.getElementById("input-textarea");
let Wordcount = document.getElementById("wordcount");
let charactercount = document.getElementById("Charactercount");

inputarea.addEventListener('input' , () =>{
    charactercount.textContent = inputarea.value.lenght;
})