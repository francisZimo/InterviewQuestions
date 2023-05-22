export function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const tmp = nums[i];
    const num = target - tmp;
    if (map[num]) {
      return [map[num], i];
    } else {
      map[tmp] = i;
    }
  }
}