characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
let inputed = document.getElementById("password1")
let outputed = document.getElementById("password2")
let generateButton = document.getElementById("generate-btn")
let passwordLength = 12
let password = " "
let password2 = " "

function generate(){
    for (let i = 0; i <= passwordLength; i++){
    let randomPass = Math.floor(Math.random()* characters.length)
        password += characters[randomPass]
    }

    inputed.value = password
    password =" "



    for (let i=0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random()* characters.length)
        password2 += characters[randomNumber]
    }
outputed.value = password2 
password2 = " "

}


