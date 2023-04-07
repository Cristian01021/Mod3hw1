//write assigned code//
function generatePassword(){

 //need array of upper and lower case//
 //need array of numbers and special characters// 
 //need to hold the password that is being created//
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var number = ["0123456789"];
var special = ["#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
var selectArray = [];
//define the length of the chosen password//










}



function generatePassword

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var generateBtn = document.querySelector("#generate");
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
