// Assignment Code
var generateBtn = document.querySelector("#generate");

// the variables below are the global variables required throughout the code
// it was easier for a beginner like me to make them global rather than pulling them out of certain functions and into other ones

var password = "";
var passwordLength;
var uppercaseLetters;
var lowercaseLetters;
var numbers;
var etc;

// lengthOfPassword function makes a window prompt that asks how many characters are added and stops the function from continuing if a number not included is inputted
// some trouble is found if certain letters are added because it may continue the function anyway, but this is something I don't know how to deal with yet

function lengthOfPassword() {
    passwordLength = parseInt(window.prompt("How many characters would you like in your password? \nPlease enter a number 8-128 below and click OK to confirm."));
        if (passwordLength < 8) {
            window.alert("Please enter a numeric value 8 or above!");
            return false;
        } else if (passwordLength > 128) {
            window.alert("Please enter a numeric value 128 or below!");
            return false;
        } else {
            window.alert("Good choice! Now it's time to build your password!");
            return true;
        }  
}

// this function defines the variables above and how they will be used in the password generator, as well as dedicates a spot to ask a user what they would like in their password
// below, the uppercase, lowercase, number, and symbol types that can be added with the proper responses are below.
// if a user clicks cancel, the item will not be added. if the user clicks OK, the variable will be added. and if the user denies all options, the function will end and need to be restarted due to no usable variables

function typesOfVariables() {
    uppercaseLetters = window.confirm("Would you like any UPPERCASE letters in your password?")
        if (uppercaseLetters === true) {
            window.alert("Uppercase letters will be added to your password!");
        } else {
            window.alert("No uppercase letters will be added to your password.");
        };

    lowercaseLetters = window.confirm("Would you like any lowercase letters in your password?");
        if (lowercaseLetters === true) {
            window.alert("Lowercase letters will be added to your password!");
        } else {
            window.alert("Lowercase letters will not be added to your password.");
        }

    numbers = window.confirm("Would you like to add numbers to your password?");
        if (numbers === true) {
            window.alert("Numbers will be added to your password!");
        } else {
            window.alert("Numbers will not be added to your password.");
        };

    etc = window.confirm("Would you like to add symbols to your password?");
        if (etc === true) {
            window.alert("Symbols will be added to your password!");
        } else {
            window.alert("Symbols will not be added to your password.");
        }

        if (uppercaseLetters === false && lowercaseLetters === false && numbers === false && etc === false) {
            window.alert("Must add at least one!");
            return false;
        } else {
            return true;
        }
}

// overall password creation function. This turns a new variable into an array with all the possible numbers, letters, or symbols that can be added, as well as a blank variable for the starting part of the array (which is empty)

function passwordCreation() {
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numerics = ["1","2","3","4","5","6","7","8","9","0"];
    var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ":", ";", "<", ">", "{", "}", "|", "~", "\"", "?", "`", "'"];
    var blank = [];
    
// if statements below say if the variable is used, it will be added to blank, creating an array with the items a user wants in their password that can be called upon in the final steps
    if (uppercaseLetters === true) {
        blank = blank.concat(uppercase);
    }

    if (lowercaseLetters === true) {
        blank = blank.concat(lowercase);
    }

    if (numbers === true) {
        blank = blank.concat(numerics);
    }

    if (etc === true) {
        blank = blank.concat(symbols);
    }

// below is the math equation that randomizes which number in the blank variable is chosen for the randomized password. the new variable index describes the overall index of the words added to blank, and picks a corresponding number from the array to add to the password at random

    for (i = 0; i < passwordLength; i++) {
        var index;
        index = Math.floor(Math.random() * (blank.length));
        password += blank[index];
        
    }
}

// the below function generates the password and creates an if statement that ends the functions should they be entered incorrectly, otherwise they would continue and create an issue in the final password generation attempt by reasking the questions that were entered incorrectly
// then, the password variable is returned, so the password can be displayed

function generatePassword() {
    var passedCheck;
    var passedTwoCheck;
    passedCheck = lengthOfPassword();
    if (passedCheck === true) {
            passedTwoCheck = typesOfVariables();
        if (passedTwoCheck === true) {
            passwordCreation()
        } else {
            return;
        }
    } else {
        return;
    }
    return password;
    }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
