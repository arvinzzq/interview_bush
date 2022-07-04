// 动态规划
// dp[i] = max(nums[i], dp[i - 1] + nums[i])

function maxSubArray(nums) {
  if (!nums.length) {
    return 0;
  }
  const dp = [nums[0]];
  let maxVal = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    if (dp[i] > maxVal) {
      maxVal = dp[i];
    }
  }
  return maxVal;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

console.log(maxSubArray([1]));

console.log(maxSubArray([5,4,-1,7,8]));