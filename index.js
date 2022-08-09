let passwdEl1 = document.getElementById("password-1")
let passwdEl2 = document.getElementById("password-2")

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let status = 0
function generate1(){
    if(status === 0){
        for(let i = 0; i<15; i++){
            let randomNum1 = Math.floor(Math.random()*70)
            let randomNum2 = Math.floor(Math.random()*70)
            passwdEl1.textContent += characters[randomNum1]
            passwdEl2.textContent += characters[randomNum2]
        }
    }
    else if(status === 1){
        console.log("Your password has already been generated")
        console.log("Click again to reset the password ")
    }
    else if(status ===2){
        passwdEl1.textContent = null
        passwdEl2.textContent = null
        for(let i = 0; i<15; i++){
            let randomNum1 = Math.floor(Math.random()*70)
            let randomNum2 = Math.floor(Math.random()*70)
            passwdEl1.textContent += characters[randomNum1]
            passwdEl2.textContent += characters[randomNum2]
            status = 0
        }
    }
    status +=1
}
