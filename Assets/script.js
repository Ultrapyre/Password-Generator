// Assignment Code
var generateBtn = document.querySelector("#generate");


//Generates a password...?
function generatePassword(){
  //Asks for the length of the password.
  var length = window.prompt("How long do you want your password? Enter a number from 8 to 128.");
  
  //If the number is too small, too large or an invalid entry, cancels the operation.
  if(length < 8 || length > 128 || !length){
    window.alert("Hey! That's not a valid number!")  
    return "";
  }

  //A series of confirmations on character types to use.
  var lowercaseChoice = window.confirm("Do you want lowercase letters in your password?");
  var uppercaseChoice = window.confirm("Do you want uppercase letters in your password?"); 
  var numericChoice = window.confirm("Do you want numbers in your password?");
  var specialChoice = window.confirm("Do you want special characters in your password?");

  //If no character types chosen, terminates the process.
  if (!lowercaseChoice&&!uppercaseChoice&&!numericChoice&&!specialChoice){
    window.alert("Sorry, at least one type of character is required!")  
    return "";
  }

  //Create an empty characters array, and toss in the characters that were chosen.
  var characters = [];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var special = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\"","]","^","_","`","{","|","}","~"];
  if (lowercaseChoice){
    characters = characters.concat(lowercase);
  }
  if(uppercaseChoice){
    characters = characters.concat(uppercase);
  }
  if(numericChoice){
    characters = characters.concat(numbers);
  }
  if(specialChoice){
    characters = characters.concat(special);
  }
  
  //Create the password by outputting random characters into an array.
  var passwordArray = [];
  for (var i=0; i<length;i++){
    var chosen = Math.floor(Math.random()*characters.length);
    passwordArray.push(characters[chosen]);
  }

  //Converts the resulting array into a string that can be returned.
  var password = passwordArray.join("");

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
