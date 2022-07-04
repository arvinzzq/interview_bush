/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  if (len < 2) {
    return 0;
  }
  let minPrice = prices[0];
  const dp = [0];
  for (let i = 1; i < len; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
  }
  return dp[len - 1];
};

console.log(maxProfit([7,1,5,3,6,4]));

console.log(maxProfit([7,6,4,3,1]));