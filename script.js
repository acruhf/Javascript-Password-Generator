
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
   // var passwordText = document.querySelector("#password");
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
    }
