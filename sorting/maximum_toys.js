function maximumToys(arr, k) {
    arr = arr.sort((a,b) => a - b);
    if(arr.length === 0) return 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      if(k > 0 && (k - arr[i]) >= 0){
        k -= arr[i];
        count++;
      }
      else return count;
    }
    return count;
  }
  
  let arr = [3, 7, 2, 9, 4];
  let k = 15;
  
  console.log("output: ", maximumToys(arr, k));