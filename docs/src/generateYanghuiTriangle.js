/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  const res = [];
  for (let i = 1; i <= numRows; i++) {
      if (!res[i - 1]) {
          res[i - 1] = [];
      }
      for (let j = 0; j < i; j++) {
          if (j === 0 || j === i - 1) {
              res[i - 1][j] = 1;
          } else {
              res[i - 1][j] = res[i - 2][j - 1] + res[i - 2][j];
          }
      }
  }
  return res;
};

var getRow = function(rowIndex) {
    const res = [];
    const numRows = rowIndex + 1;
    for (let i = 1; i <= numRows; i++) {
        if (!res[i - 1]) {
            res[i - 1] = [];
        }
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                res[i - 1][j] = 1;
            } else {
                res[i - 1][j] = res[i - 2][j - 1] + res[i - 2][j];
            }
        }
    }
    return res[rowIndex];
  };

console.log(JSON.stringify(generate(5)));