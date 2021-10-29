const change = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;


change.addEventListener("click" , changeBg);

function changeBg() {
    const col1 = getrandomRGB();
    const col2 = getrandomRGB();
    const col3 = getrandomRGB();

    colorstring = `rgb(${col1}, ${col2}, ${col3})`;

    body.style.background = colorstring;
    color.innerText = colorstring;
    
}

function getrandomRGB() {
    return Math.floor(Math.random() *256);
}