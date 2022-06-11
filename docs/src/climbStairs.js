// 爬楼梯
// https://leetcode.cn/problems/climbing-stairs
// 动态规划
// dp[n] = dp[n-1] + dp[n-2]
const climbStairs = function(n) {
  let dp = [1, 1, 2];
  if (n <=2) {
    return dp[n];
  }
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n];
};

console.log(climbStairs(2));

console.log(climbStairs(3));
