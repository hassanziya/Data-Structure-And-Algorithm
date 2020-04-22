function printAllPairs(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      return i, j;
    }
  }
}

var t1 = performance.now();
printAllPairs(100000000);
var t2 = performance.now();
console.log("Time Elapsed: " + (t2 - t1) / 1000 + "seconds.");
