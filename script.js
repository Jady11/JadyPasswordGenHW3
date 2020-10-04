// Assignment Code
var generateBtn = document.querySelector("#generate");
var lastResult = "";

function userInput() {
  var passwordLength = prompt("How many characters would you like? Choose between 8 and 128.");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Number must be between 8 and 128");
    userInput();
  } else{
  
  var askSpecialChar = confirm("Do you want special characters?");
  var askUpperCaseLetter = confirm("Do you want UPPER Case Letters?");
  var askNumbers = confirm("Do you want Numbers?");
  }


  // var password = generatePassword();


  // passwordText.value = password;
  generatePassword();

  function generatePassword() {
    var howManyCharacters = 0;
    var specialCharacters = ["!@#+=$%^.:&*()?"];
    var lowerCaseLetter = ["abcdefghijklmnopqrstuvwxyz"];
    var upperCaseLetter = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var numbers = ["0123456789"];
    var totalChar = lowerCaseLetter;

    if (askSpecialChar === true) {
      totalChar = totalChar + specialCharacters
    } if (askUpperCaseLetter === true) {
      totalChar = totalChar + upperCaseLetter
    } if (askNumbers === true) {
      totalChar = totalChar + numbers
    }
    console.log("These are my options " + totalChar);

    for (var i = passwordLength; i > 0; i--) {
      lastResult = lastResult + totalChar[Math.floor(Math.random() * totalChar.length-1)];
     
    }
  }
    console.log(lastResult);


  
    
    var passwordText = document.querySelector("#password");

    passwordText.value = lastResult;

}


// Add event listener to generate button
generateBtn.addEventListener("click", userInput);
