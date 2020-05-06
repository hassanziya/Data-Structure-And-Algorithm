function divideConquer(arr, num) {
  var min = 0;
  var max = arr.length - 1;
  while (min <= max) {
    var mid = Math.floor((min + max) / 2);
    if (arr[mid] < num) {
      min = mid + 1;
    } else if (arr[mid] > num) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(divideConquer([1, 2, 3, 5, 7, 17, 20], 20));
