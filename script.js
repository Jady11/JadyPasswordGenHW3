// Assignment Code
var generateBtn = document.querySelector("#generate");


function userInput() {
  var passwordLength = prompt("");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Number must be between 8 and 128");
      userInput();
    }

  var numberLength = prompt("How many characters would you like? Choose between 8 and 128.");
  var askSpecialChar = confirm("Do you want special characters?");
  var askUpperCaseLetter = confirm("Do you want UPPER Case Letters?");
  var askNumbers = confirm("Do you want Numbers?");

  console.log(numberLength);
  console.log(askSpecialChar);
  console.log(askUpperCaseLetter);
  console.log(askNumbers);
  
  // var password = generatePassword();


  // passwordText.value = password;
generatePassword();



function generatePassword(){
  var howManyCharacters = 0; 
  var specialCharacters = ["!","@","#","$","%","&","*","?"];
  var lowerCaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var totalChar = lowerCaseLetter;

  if (askSpecialChar === true) {
    totalChar = totalChar + specialCharacters
    } if (askUpperCaseLetter === true) {
      totalChar = totalChar + upperCaseLetter
    } if (askNumbers === true) {
      totalChar = totalChar + numbers
    } 
    console.log("These are my options " + totalChar );
  }
 
// function getInfo() {
//   var getPasswordLength = parseInt
// }

// // Write password to the #password input
// function writePassword() {
//   userInput();
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
}

// Add event listener to generate button
generateBtn.addEventListener("click", userInput);
