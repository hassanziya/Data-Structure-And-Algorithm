function lookUp(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var storeStr = {};

  for (var i = 0; i < str1.length; i++) {
    var letter = str1[i];
    storeStr[letter] ? (storeStr[letter] += 1) : (storeStr[letter] = 1);
  }

  for (var i = 0; i < str2.length; i++) {
    var letter = str2[i];
    if (!storeStr[letter]) {
      return false;
    } else {
      storeStr[letter] -= 1;
    }
  }
  return true;
}

console.log(lookUp("ziya", "yiaz"));
