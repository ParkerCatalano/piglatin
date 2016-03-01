//var user_input;
//var piglatin = "ay";
//var output;

//$(document).ready(function() {

//})

var pigLatin = function(engWord) {
  if(!hasConsonantAt(engWord,0)) {
    var transWord = engWord;
  } else if (!hasConsonantAt(engWord, 1)) {
    var transWord = engWord.slice(2) + engWord.slice(0,2);
  } else if(hasConsonantAt(engWord,0)) {
    var transWord = engWord.slice(1) + engWord.slice(0,1);
  }
  return transWord + 'ay';
};

var hasConsonantAt = function(word, position) {
  var vowels = ['a','e','i','o','u'];
  for (var i = 0; i < vowels.length; i++) {
    if (word[position] === vowels[i]) {
      return false;
    }
}
return true
};

var indexOfFirstVowel = function(word) {
  var index = undefined;
  var vowels = ['a','e','i','o','u'];
  var letters = word.split("");
  for (var i = 0;i < letters.length; i++){
    var letter = letters[i];
    for (var j = 0; j< vowels.length; j++) {
      if (letters[i] === vowels[j]) {
        return index = i;
      }
    }
  }
};
