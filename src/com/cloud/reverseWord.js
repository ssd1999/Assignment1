/**
 * 
 */

 function reverseWords(sentence) {
  
    let wordsArray = sentence.split(' ');

	var reversedArray = wordsArray.map(function(word) {
        return reverseWord(word);
    });
    let reversedSentence = reversedArray.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
   
    return word.split('').reverse().join('');
}


let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);

console.log("Original Sentence: ", inputSentence);
console.log("Reversed Sentence: ", reversedSentence);
