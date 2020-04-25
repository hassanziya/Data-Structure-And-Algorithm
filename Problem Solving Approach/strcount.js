function strCounts(str) {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (code >= 66 && code <= 90) {
    return true;
  } else if (code >= 97 && code <= 122) {
    return true;
  } else if (code > 47 && code < 58) {
    return true;
  } else {
    return false;
  }
}

console.log(strCounts("Hello 123 guys! let's have some fun"));
