// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = '';

var passwordLength;

var uppercaseLetters;
var lowercaseLetters;
var numbers;
var etc;

function lengthOfPassword() {
    passwordLength = parseInt(window.prompt("How many characters would you like in your password? \nPlease enter a number 8-128 below and click OK to confirm."));
        if (passwordLength < 8) {
            window.alert("Please enter a numeric value 8 or above!")
            generatePassword()
        } else if (passwordLength > 128) {
            window.alert("Please enter a numeric value 128 or below!")
            generatePassword()
        } else {
            window.alert("Good choice! Now it's time to build your password!")
        }  
}

function typesOfVariables() {
    uppercaseLetters = window.confirm("Would you like any UPPERCASE letters in your password?")
        if (uppercaseLetters === true) {
            window.alert("Uppercase letters will be added to your password!")
        } else {
            window.alert("No uppercase letters will be added to your password.");
        };

    lowercaseLetters = window.confirm("Would you like any lowercase letters in your password?");
        if (lowercaseLetters === true) {
            window.alert("Lowercase letters will be added to your password!")
        } else {
            window.alert("Lowercase letters will not be added to your password.")
        }

    numbers = window.confirm("Would you like to add numbers to your password?")
        if (numbers === true) {
            window.alert("Numbers will be added to your password!")
        } else {
            window.alert("Numbers will not be added to your password.")
        };

    etc = window.confirm("Would you like to add symbols to your password?")
        if (etc === true) {
            window.alert("Symbols will be added to your password!")
        } else {
            window.alert("Symbols will not be added to your password.")
        }

        if (uppercaseLetters === false && lowercaseLetters === false && numbers === false && etc === false) {
            window.alert("Must add at least one!")
            generatePassword();
        }
}

function passwordCreation() {
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numerics = ["1","2","3","4","5","6","7","8","9","0"];
    var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ":", ";", "<", ">", "{", "}", "|", "~", "\"", "?", "`", "'"];

    if (uppercaseLetters === true) {

    }
}

// num = Math.floor(Math.random() * (max - min + 1)) + min;

function generatePassword() {
    lengthOfPassword();
    typesOfVariables();
    passwordCreation();
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
