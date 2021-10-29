         
function getpassword () {
    var chars = "Shadman_";
    var passwordlenght = 7;
    var password= "";
    
    for (var i=0 ; i < passwordlenght;i++) {
        var randomnumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomnumber , randomnumber+1);
        
    }
    document.getElementById('password').value = password
}