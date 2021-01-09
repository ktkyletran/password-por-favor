// Assignment Code
var generateBtn = document.querySelector("#generate");
var hasLower = confirm("Would you like lower case letters?");
var hasUpper = confirm("Would you like upper case letters?");
var hasNumber = confirm("Would you like numbers?");
var hasSymbol = confirm("Would you like symbols?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Random Generator Function Choices -- Traversy Media on YouTube
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


