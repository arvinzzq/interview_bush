var lengthOfLastWord = function(s) {
  const ss = s.replace(/\s+/g, ' ');
  const wordArr = ss.split(' ').filter(item => !!item);
  return wordArr[wordArr.length - 1].length;
};

var lengthOfLastWord = function(s) {
  let index = s.length - 1;
  while (s[index] === ' ') {
      index--;
  }
  let wordLength = 0;
  while (index >= 0 && s[index] !== ' ') {
      wordLength++;
      index--;
  }
  return wordLength;
};

console.log(lengthOfLastWord("Hello World"));

console.log(lengthOfLastWord("   fly me   to   the moon  "));

console.log(lengthOfLastWord("luffy is still joyboy"));