let button = document.getElementById("btn")
let output = document.getElementById("output")

let quotes  = ["fsretvrtfsertrtbst",
                "stvdsrtsbsrynt",
                "sesffseFynt",
                "sEfasrtsbsrynt",
                "@#$#&^$%^srtsbsrynt",
                ")(*&stvdsrtsbsrynt",
                ")(*(*&^*&(^*(&stvdsrtsbsrynt",
                "!@#$%#^&$%^&%&*%^^(*&^*&(*&()*&(*&*(*)stvdsrtsbsrynt"

]
button.addEventListener("click" , ()=>{
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

