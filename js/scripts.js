//var user_input;
//var piglatin = "ay";
//var output;

//$(document).ready(function() {

//})

var pigLatin = function(engWord) {
  var splitAt = indexOfFirstVowel(engWord);
  return engWord.slice(splitAt) + engWord.slice(0, splitAt) + 'ay';
};

var indexOfFirstVowel = function(word) {
  var vowels = ['a','e','i','o','u'];
  var letters = word.split("");

  for (var i = 0;i < letters.length; i++){
    for (var j = 0; j< vowels.length; j++) {
      if (letters[i] === vowels[j]) {
        return index = i;
      }
    }
  }
};
