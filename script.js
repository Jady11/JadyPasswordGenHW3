// Assignment Code
var generateBtn = document.querySelector("#generate");
var howManyCharacters = 0; 
var specialCharacters = ["!","@","#","$","%","&","*","?"];
var lowerCaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

console.log(specialCharacters);
console.log(lowerCaseLetter);
console.log(upperCaseLetter);
console.log(numbers);


function writePassword() {
  
  var numberLength = prompt("How many characters would you like? Choose between 8 and 128.");
  var askSpecialChar = confirm("Do you want special characters?");
  var askUpperCaseLetter = confirm("Do you want UPPER Case Letters?");
  var askLowerCaseLetter = confirm("Do you want lower Case Letters?");
  var askNumbers = confirm("Do you want Numbers?");

  alert("How many characters would you like? Choose between 8 and 128.");
  alert .confirm.askSpecialChar();
  alert .confirm.askUpperCaseLetter();
  alert .confirm.askLowerCaseLetter();
  alert .confirm.askNumbers();

  

  
  var password = generatePassword();
  var passwordText = document.querySelector(#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

}

function getInfo() {
  var getPasswordLength = parseInt
}


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
