// function maxSubarraySum(arr, n) {
//   if (n > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     sum = 0;
//     for (let j = 0; j < n; j++) {
//       sum += arr[i + j];
//     }

//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// }

// console.log(maxSubarraySum([1, 2, 2, 3, 4, 5, 1, 4, 5, 5], 3));

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   var maxSum = 0;
//   var tempSum = 0;
//   for (var i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (var j = num; j < arr.length; j++) {
//     tempSum = tempSum - arr[j - num] + arr[j];
//     maxSum = Math.max(maxSum, tempSum);
//   }

//   return maxSum;
// }

// console.log(maxSubarraySum([1, 2, 2, 3, 4, 5, 1, 4, 5, 5, 1, 2], 2));
