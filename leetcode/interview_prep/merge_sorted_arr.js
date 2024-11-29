var merge = function(arr1, m, arr2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
  
    while (j >= 0) {
      if (i >= 0 && arr1[i] > arr2[j]) {
        arr1[k] = arr1[i];
        i--;
      } else {
        arr1[k] = arr2[j];
        j--;
      }
      k--;
    }
  
    return arr1;
  };

  let arr1 = [4,0,0,0,0,0], m = 1, arr2 = [1,2,3,5,6], n = 5;
  //output = [1,2,3,4,5,6] // sort in-space array
