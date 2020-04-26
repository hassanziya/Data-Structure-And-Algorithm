function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++) {
    sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[i + j];
    }

    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 2, 3, 4, 5, 1, 4, 5, 5], 3));
