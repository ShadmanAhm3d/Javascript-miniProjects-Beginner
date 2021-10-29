let result = document.getElementById("Input-text");
const clear = document.getElementById("clear-button");
const Delete = document.getElementById("Delete-button");

let calculate = (number) =>{
    result.value+= number;

}

let Result = () =>{
    try {
        result.value=eval(result.value)
    } catch (error) {
        alert("Enter valid Input")
    }
}

// function clr() {
//     result.value = " ";
    
// }
// const clear  = clr();

clear.addEventListener('click' , () => {
    result.value = " ";
})

Delete.addEventListener('click' , () => {
    result.value = result.value.slice(0,-1);
})