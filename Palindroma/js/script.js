let word = prompt("Write a word");
console.log(word);

function palindrome(addWord) {
  let brokenWord = addWord.split("");
  let brokenInvertedWord = brokenWord.reverse();
  let reverseWord = brokenInvertedWord.join("");

  let palindromeWord;
  if (addWord === reverseWord) {
    console.log("The word is a palindrome");
  } else {
    console.log("The word is not a palindrome");
  }

  return palindromeWord;
}

let check = palindrome(word);
