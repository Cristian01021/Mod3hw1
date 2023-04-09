
function generatePassword() {
  // Arrays of character types
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Password length
  var passwordLength = getPasswordLength();

  // Character type selection
  var selectArray = [];
  if (confirm("Include lowercase characters?")) {
    selectArray.push(lowercase);
  }
  if (confirm("Include uppercase characters?")) {
    selectArray.push(uppercase);
  }
  if (confirm("Include numeric characters?")) {
    selectArray.push(numbers);
  }
  if (confirm("Include special characters?")) {
    selectArray.push(special);
  }

  // If no character type is selected
  if (selectArray.length === 0) {
    alert("You must select at least one character type");
    return "";
  }

  // Generate password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var charTypeIndex = Math.floor(Math.random() * selectArray.length);
    var charType = selectArray[charTypeIndex];
    var charIndex = Math.floor(Math.random() * charType.length);
    var char = charType[charIndex];
    password += char;
  }

  return password;
}

// Get password length from user
function getPasswordLength() {
  var passwordLength = parseInt(prompt("Enter the password length (between 8 and 110):"));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Invalid input. Enter the password length (between 8 and 110):"));
  }
  return passwordLength;
}

// Get references to the element
var generateBtn = document.querySelector("#generate");

// Write password to the input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
