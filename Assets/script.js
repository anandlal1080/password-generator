// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()
{

  //set password length/complexity
  const passwordLength = parseInt(prompt("Please enter your desired password length betwwen 8 and 128"));

  //possible password values
  const valuesLowercase = "abcdefghijklmnopqrstuvwxyz";
  const valuesUppercase = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
  const valuesNumeric = "1234567890";
  const valuesSpecial = "!@#$%^&*()_+";

  let password = "";



  //create for loop to choose password characters
  for(var i = 0; i < passwordLength; i++){
      password = password + valuesLowercase.charAt(Math.floor(Math.random() * Math.floor(valuesLowercase.length )));
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

function myFunction() {
  var checkBox1 = document.getElementById("orange");
  var text1 = document.getElementById("text1");
  if (checkBox1.checked == true){
    text1.style.display = "block";
  } else {
     text1.style.display = "none";
  }
  
  var checkBox2 = document.getElementById("apple");
  var text2 = document.getElementById("text2");
  if (checkBox2.checked == true){
    text2.style.display = "block";
  } else {
     text2.style.display = "none";
  }
  
}