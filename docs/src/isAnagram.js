/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  const flagMap = {};
  for (let i = 0; i < s.length; i++) {
      flagMap[s[i]] = (s[i] in flagMap) ? (flagMap[s[i]] + 1) : 1;
  }
  for (let i = 0; i < t.length; i++) {
      if (!(t[i] in flagMap)) {
          return false;
      } else {
          flagMap[t[i]]--;
      }
      if (flagMap[t[i]] < 0) {
          return false;
      }
  }
  return true;
};