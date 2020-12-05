
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    var passwordLength = prompt("How long will your password be? Choose between 8 and 128 characters.")

    if (passwordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    return;
    }
    else if (passwordLength < 8) {
    alert("Please choose a number between 8 and 128");
    return;
        }
    alert("Confirm the characters your password will contain by pressing 'ok' for yes or 'cancel' for no for the following prompts.");
    var upperCase = confirm("Do you want uppercase letters?");
    var lowerCase = confirm("Do you want lowercase letters?");
    var numbers = confirm("Do you want numbers?");
    var symbols = confirm("Do you want special characters?");
    if (upperCase === false && lowerCase === false && numbers === false && symbols === false)
    {
    alert("Please choose at least one type of character for your password!");
    passwordText.value="Invalid Input";   
    }    
    else {
        passwordText.value = "";
        passwordText.value = generatePassword(passwordLength, upperCase, lowerCase, numbers, symbols);
    }
 }

function generatePassword(length, upperCase, lowerCase, symbols, numbers) {
    var passwordText = "";
    var currentLength = 0;
    while (currentLength < length) {
        if ((upperCase === true) && (currentLength < length)) {
            passwordText = passwordText + String.fromCharCode(Math.floor(Math.random()*26)+65);
            currentLength++;
        }
        if ((lowerCase === true) && (currentLength < length)) {
            passwordText = passwordText + String.fromCharCode(Math.floor(Math.random()*26)+97);
            currentLength++;
        }
        if ((numbers === true) && (currentLength < length)) {
            passwordText = passwordText + String.fromCharCode(Math.floor(Math.random()*10)+48);
            currentLength++;
        }
        if ((symbols === true) && (currentLength < length)) {
            passwordText = passwordText + String.fromCharCode(Math.floor(Math.random()*15)+33);
            currentLength++;
        }
    }
    return passwordText;
}