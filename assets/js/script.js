// Assignment Code
  var generateBtn = document.querySelector("#generate");
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ';', ':', '"', ',', '<', '>', '.', '/', '?'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value
}
  
var generatePassword = function () {
  var passLength = window.prompt("What would you like your password length to be? 8-128 characters.");

  if (
    !isNaN(Number(passLength)) 
  ) {
    
  }
  else {
    // run when passLength is not a number
    window.alert("You need to enter a number!")
    return
  }

  if (passLength < 8 || passLength > 128) {
    window.alert("You need to choose a number between 8-128.")
    return
  }

  var arrays = []

  var capitalLetters = window.confirm("Would you like to use capital letters?");

  if (capitalLetters === true) {
    // if capitalLetters is true, it will run this block
    arrays.push(upperCase)
  }

  var lowercaseLetters = window.confirm("Would you like to use lower case letters?");

 if (lowercaseLetters === true) {
   arrays.push(lowerCase)
 }

var specialCharact = window.confirm("Would you like to use special characters?");

 if (specialCharact === true) {
   arrays.push(specialCharacters)
 }

var number = window.confirm("Would you like to use numbers?");

 if (number === true) {
   arrays.push(numbers)
 }

  if (arrays.length === 0) {
    window.alert("You need to choose at least one option.")
    return
  }

  var password = ""
  for(var i = 0; i < passLength; i++) {
    var Charact = randomNumber(0, arrays.length-1)

    console.log("Charact", Charact)
    var randomArray = arrays[Charact]
  
    console.log(randomArray)
  
    var randomCharacter = randomNumber(0, randomArray.length-1)
    var character = randomArray[randomCharacter]
  
    console.log(randomCharacter)
    
    password = password + character
  }
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
