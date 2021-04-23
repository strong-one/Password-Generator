// Original code commented out to have start point refrence

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
// need to add variables for password
var addUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var addLower = ["abcdefghijklmnopqrstuvwxyz"];
var addNum = ["1234567890"];
var addSymbols = ["~`!@#$%^&*()_-+={[}]|:;?/>.<,"];

// used for all possible outcomes
var possibilities = "";

// Write password to the #password input
function writePassword() {
  // collect user data
  // length var storing length of user input and computer response
  var length = prompt("What is password length?");

  console.log(length);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
