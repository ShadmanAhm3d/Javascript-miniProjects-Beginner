const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('click',checkmode);

function checkmode(){
    console.log("checking");
    if(checkbox.checked){
        console.log("Darkon")
        darkmode();
    }else{
        console.log("darkoff");
        darkmodeoff();
    }
}

function darkmode() {
    
    document.body.classList.add("darkmode")
    
}

function darkmodeoff(){
    
    document.body.classList.remove("darkmode");
}