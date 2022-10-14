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

function getPasswordOptions(){

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
  return storedPass.join('')
  

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
