var generateBtn = document.querySelector("#generate");

//Possible Arrays
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var loweCase = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', ':', '{', '}', '?', '/'];

//Function to determine parameters of password
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password lenth between 8 and 128 characters");
    var askNumbers = confirm("Do you want your password to include numbers?");
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
    var askSpecialChar = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecialChar: askSpecialChar
    }
    if ((length < 8)||(length > 128))
    alert("Choose a number between 8 and 128");
    else if ((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecialChar))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}

//Function joins user responses and resulting in a strong password.
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.askNumbers) {
    for (var i of numbers)
    possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of loweCase)
    possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
    possibleCombo.push(i);
  }
  if (passwordOptions.askSpecialChar) {
    for (var i of specialChar)
    possibleCombo.push(i);
  }

  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }

  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
