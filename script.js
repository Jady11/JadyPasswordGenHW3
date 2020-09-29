// Assignment Code
var generateBtn = document.querySelector("#generate");
var howManyCharacters = 0;
var specialCharacters = [!@#$%^&*()+="':;<,>.?/|\~`"]
var lowerCaseLetter = [abcdefghijklmnopqrstuvwxwz]
var upperCaseLetter = [ABCDEFGHHIJKLMONOPQRSTUVWXYZ]
var numbers = [1234567890]


<nav class="nav nav-tabs nav-stacked">
  <a class="nav-link active" href="#">Active link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled" href="#">Disabled link</a>
</nav>
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
