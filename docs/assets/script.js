

var characternumber = (prompt("How long do you want your password to be? (8 to 128 characters)"));
var character = prompt("What kind of characters should your password contain: special, number, capital, or lowercase.");

function createpassword() {
  var set = "";
  var characterlower = character.toLowerCase();
 
  if( characterlower == "lowercase" ) {
   
    set = "abcdefghijklmnopqrstuvwxyz";
  } 
  else if( characterlower == "capital" ) {
   
    set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
   else if( characterlower == "number" ) {
    
    set = "0123456789";
  } 
  else if( characterlower == "special" ) {
    
    set = "!\"#$%&";
  } 

  var randomvalue = "";
  for (var i = 0; i < characternumber; i++) {
    randomvalue += set.charAt(Math.floor(Math.random() * set.length));
  }
  return randomvalue;
}
//Alert satisfies acceptance criteria that the generated password may appear in an alert or written into the div
alert(createpassword());

