var slider = document.getElementById("myRange");
var output = document.getElementById("sliderlength");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword()
{
  
  //set password length/complexity
  
  
  //possible password values
  const valuesLowercase = "abcdefghijklmnopqrstuvwxyz";
  const valuesUppercase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  const valuesNumeric = "1234567890";
  const valuesSpecial = "!@#$%^&*()_+";
  var passwordLength = document.getElementById("myRange").value
  let charsForPassword = "";
  let password = "";
  var checkBox1 = document.getElementById("uppercase");
  if (checkBox1.checked == true){
    charsForPassword += valuesUppercase
  }
  var checkBox2 = document.getElementById("lowercase");
  if (checkBox2.checked == true){
    charsForPassword += valuesLowercase
  }
  var checkBox3 = document.getElementById("numeric");
  if (checkBox3.checked == true){
    charsForPassword += valuesNumeric
  }
  var checkBox4 = document.getElementById("specialchars");
  if (checkBox4.checked == true){
    charsForPassword += valuesSpecial
  }
  
  
  
  //create for loop to choose password characters
  for(var i = 0; i <passwordLength; i++){
    password = password + charsForPassword.charAt(Math.floor(Math.random() * Math.floor(charsForPassword.length )));
  }
  
  return(password)
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
