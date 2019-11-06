$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.


  console.log("first");


$("#something").click(function(){

  let myString = $("#input").val();

  let myString2 = myString.slice(0, 1);

  let myString3 = myString.slice(1, myString.length);

  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

if(myString2 === "b" || "B" || "c" || "C" || "d" || "D" || "f" || "F" || "g" || "G" || "h" || "H" || "j" || "J" || "k" || "K"|| "l" || "L" || "m" || "M" || "n" || "N" || "p" || "P" || "q" || "Q" || "r" || "R" || "s" || "S" || "t" || "T" || "v" || "V" || "w" || "W" || "x" || "X" || "y" || "Y" || "z" || "Z"){

  $("#ans").text( myString3 + myString2 + "ay");

}
else
{
  $("#ans").text( myString + "ay");
}
});













});
