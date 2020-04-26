// function countUniqueValues(sortedArr) {
//   for (var i = 0; i < sortedArr.length; i++) {
//     var element = sortedArr[i];
//     for (var j = 0; j < sortedArr.length; j++) {
//       if (element === sortedArr[j + i + 1]) {
//         sortedArr.splice(j + i + 1, 1);
//       }
//     }
//   }

//   return sortedArr;
// }

// console.log(countUniqueValues([-1, 2, 4, 4, 5, 5, 5, 6, 7, 7, -1, 2, 2]));

// function countUniqueValues(sortedArr) {
//   var i = 0;
//   for (var j = 1; j < sortedArr.length; j++) {
//     if (sortedArr[i] !== sortedArr[j]) {
//       i++;
//       sortedArr[i] = sortedArr[j];
//     }
//   }

//   return i + 1;
// }

// console.log(countUniqueValues([-1, 2, 2, 2, 2, 3, 4, 5, 5, 6, 7]));
