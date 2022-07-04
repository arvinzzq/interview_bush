const romanToNumMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function romanToInt(s) {
  let intRes = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'I' && s[i+1] && s[i+1] === 'V') {
          intRes += 4;
          i++;
      } else if (s[i] === 'I' && s[i+1] && s[i+1] === 'X') {
          intRes += 9;
          i++;
      } else if (s[i] === 'X' && s[i+1] && s[i+1] === 'L') {
          intRes += 40;
          i++;
      } else if (s[i] === 'X' && s[i+1] && s[i+1] === 'C') {
          intRes += 90;
          i++;
      } else if (s[i] === 'C' && s[i+1] && s[i+1] === 'D') {
          intRes += 400;
          i++;
      } else if (s[i] === 'C' && s[i+1] && s[i+1] === 'M') {
          intRes += 900;
          i++;
      } else {
          intRes += romanToNumMap[s[i]];
      }
  }
  return intRes;
};

console.log(romanToInt('III'));

console.log(romanToInt('IV'));

console.log(romanToInt('IX'));

console.log(romanToInt('LVIII'));

console.log(romanToInt('MCMXCIV'));

