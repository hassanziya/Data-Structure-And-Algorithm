// function same(arr1, arr2) {
//   var checker = 0;
//   for (var i = 0; i < arr1.length; i++) {
//     var count = 0;
//     for (var j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         count++;
//       }
//     }
//     if (count !== 1) {
//       return false;
//     } else {
//       checker++;
//     }
//   }

//   if (checker === arr1.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(same([1, 2, 5, 3], [1, 4, 9, 25]));

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (var i = 0; i < arr1.length; i++) {
//     var correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// console.log(same([1, 2, 3, 2], [9, 4, 4, 1]));

// var num1 = 5;
// var array = [1, 4, 6, 3, 5, 8, 4, 3];
// var flag = 0;
// for (var i = 0; i < array.length; i++) {
//   if (num1 === array[i]) {
//     flag = 1;
//     break;
//   }
// }
// if (flag == 1) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 4, 5, 3], [16, 25, 9, 1]));
