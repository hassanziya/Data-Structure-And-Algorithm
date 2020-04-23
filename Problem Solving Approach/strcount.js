function strCounts(str) {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(strCounts("hello"));
