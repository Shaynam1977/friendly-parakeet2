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
  // validation to make sure that at least one character type is selected 
  if(
    hasSpecialCharacters ===false && hasNumericCharacters === false &&
    hasUpperCaseCharacters ===false && hasLowerCaseCharacters === false 
  ){
    alert("oops! make a selection")
    return null
  }
// password options object to take in user answers and make available to make
// outside user prompt function 
var passWordOptions = {
  length:length, 
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasUpperCaseCharacters: hasUpperCaseCharacters,
  hasLowerCaseCharacters: hasLowerCaseCharacters,
}
console.log(passWordOptions)
// the return makes password options usable outside of this function 
return passWordOptions
}

function getRandom(arr){
  var randIndex = Math.floor(Math.random()*arr.length) //returns random index
  //based on array length
  var randElement = arr[randIndex] //converts random index to its ture character
  // value
  //randElement returnd the true value
  return randElement
}
// getRandom(lowerCase)
function generatePassword(){
  // options variable to grab user answers object from getPassword options
  var options =  getPasswordOptions()
  // array to store random characters for our final password 
  var storedPass =[]
  // character pool to store any potential characters that can be stored
  //into our storePass array
  var possibleOutComes =[]
  // take responces from optionsObject if ture concat(combine) corasponding 
  // array into our possible outcomes array
  if(options.hasSpecialCharacters ===true){
    possibleOutComes = possibleOutComes.concat(specialCharacters)
  }
  if (options.hasNumericCharacters ===true){
    possibleOutComes = possibleOutComes.concat(numericCharacters)
  }
  if (options.hasLowerCaseCharacters ===true){
    possibleOutComes = possibleOutComes.concat(lowerCase)
  }
  if (options.hasUpperCaseCharacters ===true){
    possibleOutComes = possibleOutComes.concat(upperCase)
  }
  // run as many times as they chose 
  for(var i=0; i<options.length; i++){
    // get single random character from possible outcomes array
    var possibleCharacter = getRandom(possibleOutComes)
    // push (place) the random character to our stored pass array
    storedPass.push(possibleCharacter)
    console.log(storedPass)
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