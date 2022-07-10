var convertToTitle = function(columnNumber) {
  let title = '';
  let divisor = 26;
  let remainedVal = columnNumber;
  const baseCharCode = 'A'.charCodeAt(0);
  while (remainedVal) {
      remainedVal--;
      const tempVal = remainedVal % divisor;
      title = String.fromCharCode(baseCharCode + tempVal) + title;
      remainedVal = Math.floor(remainedVal / divisor);
  }
  return title;
};

/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
  const baseCode = 'A'.charCodeAt('0');
  let sumNumber = 0;
  let mutiple = 1;
  for (let i = columnTitle.length - 1;  i >= 0; i--) {
      sumNumber += (columnTitle[i].charCodeAt(0) - baseCode + 1) * mutiple;
      mutiple *= 26;
  }
  return sumNumber;
};