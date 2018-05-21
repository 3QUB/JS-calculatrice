var array_number = [1, 3, 2];
var array_word = "Hello World";


// Return max value of array
function my_max(array) {
  console.log(Math.max(...array));
  return (Math.max(...array));
}

//Count number of vowels
function vowel_count(str) {
  var vowelsCount = 0;

  //turn the input into a string
  var string = str.toString();

  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  console.log (vowelsCount);
  return (vowelsCount);
}

function reverse(str){
  console.log(str.split("").reverse().join(""));
  return str.split("").reverse().join("");
}

my_max(array_number)
vowel_count(array_word)
reverse(array_word)

