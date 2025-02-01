const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyIcon");
const passIndicator = document.getElementById("passIndicator");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
    generatePassword();
});

function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += uppercaseEl.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    characters += lowercaseEl.checked ? "abcdefghijklmnopqrstuvwxyz" : "";
    characters += numbersEl.checked ? "0123456789" : "";
    characters += symbolsEl.checked ? "!@#$%^&*()_+-=" : "";

    for(let i=0; i<length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passBox.value = password;
    updatePasswordIndicator();
}

genBtn.addEventListener("click",()=>{
    generatePassword();
});

function updatePasswordIndicator(){
    const passwordStrength = getPasswordStrength(passBox.value);

    passIndicator.className = "pass-indicator " + passwordStrength;
}

function getPasswordStrength(password){
    if(password.length <=10 ){
        return "weak";
    }
    else if(password.length <=20){
        return "medium";
    }
    else{
        return "strong";
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    updatePasswordIndicator();
});

copyBtn.addEventListener("click",()=>{
    if(passBox.value != "" || passBox.value != null){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText = "check";

        setTimeout(()=>{
            copyBtn.innerHTML = "content_copy";
            
        },3000);
    }
})
