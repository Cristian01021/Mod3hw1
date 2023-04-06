// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword
//prompt for passwor dlength, stored in variable//
//validate the user input if the user chooses <8 or >128, theyre going to restart or call the function that callsfor the length again //
//prompt, do they want uppercase//
//prompt, do they want lowercase//
//prompt, do they want numbers//
//prompt, do they want nspecial characters//
//going to want an array of those characters types//
//keep them seperate or have a big array//
//need  one selected charcter type included in the password//

//validate  that the user has chosen at least one charcter set, if not have them start over or call the funtion that calls for the character set//



// Write password to the #password input//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
