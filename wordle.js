
// get list of all 5 letter words
const allWords = require('./words');
// has these letters
const hasLetters = ['e','s','i']; 
// must not has these letters
const mustNotHaveLetters = ['r', 'a','d','y','b','l','u','v'];
// must have selected letters in these positions
const mustHaveLettersInPosition = ['s','p','i',,'e']
// not in these positions
const mustNotHaveLettersInPosition = [,'e',,'c','s']

// function to return true if the word has any of the letters
const containsLetter = (word, letter) => {
  return word.includes(letter);
}

const hasLetterInPosition = (word, letter, position) => {
  if (letter === undefined) return true;

  return word[position] === letter;
}

//TASK: make sure that no words in 'filteredWords' have letters from the 'mustNotHaveLettersInPosition'

const filteredWords = allWords.filter(word => {
  return hasLetters.every(letter => containsLetter(word, letter)) &&
         mustNotHaveLetters.every(letter => !containsLetter(word, letter)) &&
         mustHaveLettersInPosition.every((letter, index) => hasLetterInPosition(word, letter, index)) &&
         mustNotHaveLettersInPosition.every((letter, index) => letter === undefined || !hasLetterInPosition(word, letter, index));
});

console.log(filteredWords);
console.log('possible words', filteredWords.length);