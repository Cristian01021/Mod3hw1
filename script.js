
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
