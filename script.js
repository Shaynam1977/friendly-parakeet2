// character arrays that provide potential characters that 
// can be used in our function for final password
var specialCharacters = ['@',
'%',
'+',
'\\',
'/',
"'",
'!',
'#',
'$',
'^',
'?',
':',
',',
')',
'(',
'}',
'{',
']',
'[',
'~',
'-',
'_',
'.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// function to get user input on password length and character types
// that they might want to use
function getPasswordOptions(){
  // prompt user for password length and validate if the asnswer is a number
  // and between 8-128 characters
  var length = parseInt( prompt("what Number of charaters whould you like?") )
  if(Number.isNaN(length)){
    alert("oops! Enter a number.")
    return null
  }
  if(length < 8){
    alert("oops! Enter a value greater than 8.")
    return null
  }
  if(length > 128){
    alert("oops! Number must be lwer than 128.")
    return null
  }
  // confirms to evaluate what character types the user might want in their 
  // password, returns a true or a false 
  var hasSpecialCharacters = confirm("click okay to include special characters")
  var hasNumericCharacters = confirm("click okay to include numbers")
  var hasUpperCaseCharacters = confirm("click okay to include uppercase letters")
  var hasLowerCaseCharacters = confirm("click okay to include lowercase letters")

  if(
    hasSpecialCharacters ===false && hasNumericCharacters === false &&
    hasUpperCaseCharacters ===false && hasLowerCaseCharacters === false 
  ){
    alert("oops! make a selection")
    return null
  }

var passWordOptions = {
  length:length, 
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasUpperCaseCharacters: hasUpperCaseCharacters,
  hasLowerCaseCharacters: hasLowerCaseCharacters,
}
return passWordOptions
}

function getRandom(arr){
  var randIndex = Math.floor(Math.random()*arr.length)
  var randElement = arr[randIndex]
  return randElement
}

function generatePassword(){
  var options =  getPasswordOptions()
  var storedPass =[]
  var possibleOutComes =[]
  var garanteedOutCome =[]
  if(!options)return null
  if(options.hasSpecialCharacters){
    possibleOutComes = possibleOutComes.concat(specialCharacters)
    garanteedOutCome.push(getRandom(specialCharacters))
  }
  if (options.hasNumericCharacters){
    possibleOutComes = possibleOutComes.concat(numericCharacters)
    garanteedOutCome.push(getRandom(numericCharacters))
  }
  if (options.hasLowerCaseCharacters){
    possibleOutComes = possibleOutComes.concat(lowerCase)
    garanteedOutCome.push(getRandom(lowerCase))
  }
  if (options.hasUpperCaseCharacters){
    possibleOutComes = possibleOutComes.concat(upperCase)
    garanteedOutCome.push(getRandom(upperCase))
  }

  for(var i=0; i<options.length; i++){
    var possibleCharacter = getRandom(possibleOutComes)
    storedPass.push(possibleCharacter)
  }
  for(var i=0; i<garanteedOutCome.length; i++){
    storedPass[i]= garanteedOutCome[i]
  }
  console.log(storedPass)

  // returned string becomes value of password veriable in
  // writePassword function
  return storedPass.join('')
  

}
// Assignment Code
// generateBtn ver to target the generateId in html
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button that runs the writePassword
// btn
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  // password is set equal to return generate password function
  var password = generatePassword();
  // documnet targeting html text area that has Id of password
  var passwordText = document.querySelector("#password");
  // set text area value to the return gereate value from password function
  passwordText.value = password;
}