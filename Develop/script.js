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
var addNumbers = ["1234567890"];
var addSymbols = ["~`!@#$%^&*()_-+={[}]|:;?/>.<,"];

// used for all possible outcomes
var possibilities = "";

// Write password to the #password input
function writePassword() {
  // collect user data
  // length var storing length of user input and computer response
  var length = prompt("What is password length?"); // gives string

  if (length < 8 || length > 128) {
    alert("Your password is out of range");
    return;
  }
  //need to set variables for user choices, pulled from global variables
  var wantNum = confirm("Want Numbers?"); // boolean
  var wantUppers = confirm("Want Uppercase?"); //boolean
  var wantLowers = confirm("Want Lowercase?"); //boolean
  var wantSymbols = confirm("Want Symbols?"); //boolean

  //this is saying that if user wants numbers possibilities plus addNum(var in global) equals a possibility
  if (wantNum) {
    possibilities = possibilities + addNumbers;
  }

  if (wantUppers) {
    possibilities = possibilities + addUpper;
  }

  if (wantLowers) {
    possibilities = possibilities + addLower;
  }

  if (wantSymbols) {
    possibilities = addSymbols + addSymbols;
  }

  console.log(possibilities);
  // password = possibilities
  var password = "";
  //pick randomly from the possibilities and create password
  for (let i = 0; i < length; i++) {
    var random = Math.random();
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
