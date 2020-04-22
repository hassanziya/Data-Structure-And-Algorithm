function logAtleast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    return i;
  }
}

var t1 = performance.now();
logAtleast5(1000);
var t2 = performance.now();
console.log("Time Elapsed: " + (t2 - t1) / 1000 + "seconds.");
