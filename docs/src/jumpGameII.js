// 给你一个非负整数数组nums 你最初位于数组第一个位置
// 数组中每个元素代表你在该位置可以跳跃的最大长度。你的目标是使用最少的跳跃次数到达数组最后一个位置
// 假设你总是可以到达数组的最后一个位置
// 实例：
// 输入：nums=【2,3,1,1,4】
// 输出：2
// 解释：跳到最后一个位置的最小跳跃数是2，从下标为0跳到下标为1的位置，从下标为1的位置跳3步到达最后一个位置。总计跳跃2次

// 使用动态规划

function jumpArr(arr) {
  const len = arr.length;
  if (!len) {
    return 0;
  }
  const dp = arr.map((_item, index) => index);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (j + arr[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[len - 1];
}

console.log(jumpArr([2,3,1,1,4]));