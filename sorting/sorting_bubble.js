function countSwaps(a) {
  let count = 0;
  let n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        count++;
      }
    }
  }
  return `Array is sorted in ${count} swaps.  
           First Element: ${a[0]}  
           Last Element: ${a[a.length - 1]}`;
}

const arr = [6, 4, 1];

console.log("output: ", countSwaps(arr));