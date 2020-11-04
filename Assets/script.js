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
  var checkBox1 = document.getElementById("uppercase");
  
  if (checkBox1.checked == true){
    text1.style.display = "block";
  } else {
     text1.style.display = "none";
  }
  
  var checkBox2 = document.getElementById("lowercase");
  
  if (checkBox2.checked == true){
    text2.style.display = "block";
  } else {
     text2.style.display = "none";
  }
  
  var checkBox3 = document.getElementById("numeric");
  
  if (checkBox3.checked == true){
    text2.style.display = "block";
  } else {
     text2.style.display = "none";
  }

  var checkBox4 = document.getElementById("specialchars");
  
  if (checkBox4.checked == true){
    text2.style.display = "block";
  } else {
     text2.style.display = "none";
  }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("length");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}