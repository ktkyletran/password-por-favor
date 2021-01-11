// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Question Prompts
  var hasLower = confirm("Would you like lower case letters?");
  var hasUpper = confirm("Would you like upper case letters?");
  var hasNumber = confirm("Would you like numbers?");
  var hasSymbol = confirm("Would you like symbols?");
  var passwordLength = parseInt(prompt("How many characters would you like in your password? Pick between 8 and 128"));
  
  // Variables to be included/excluded in generated password
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()[]<>.,";

  // Puts generated password in password box
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Function to generate random password -- w/ help from VerkkoNet via YouTube
  function generatePassword() {
    var allowedOptions = "";
    var generatedPassword = "";
    var length = passwordLength;

    // Check to include selected options
    if (hasLower === true) {
      allowedOptions += lowercase;
    }

    if (hasUpper === true) {
      allowedOptions += uppercase;
    }
    
    if (hasNumber === true) {
      allowedOptions += numbers;
    }

    if (hasSymbol === true) {
      allowedOptions += symbols;
    }

    // Check for password length and at least one option selected before returning password
    if (passwordLength >= 8 && passwordLength <= 128 && allowedOptions !== "") {
      for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * allowedOptions.length);
  
        generatedPassword += allowedOptions[random];
      }
      return generatedPassword;
    } 
    else if (allowedOptions !== "" && (passwordLength > 128 || passwordLength < 8)) {
      return "Please try again and choose a number between 8 and 128";
    }
    else if (allowedOptions === "" && (passwordLength > 128 || passwordLength < 8)) {
      return "Please choose at least one password option and choose a number between 8 and 128";
    }
    else {
      return "Please start over and select at least one option \n(Lowercase, Uppercase, Numbers, and/or Symbols)";
    }
  };

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
