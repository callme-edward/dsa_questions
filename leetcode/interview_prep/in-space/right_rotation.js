var rotate = function(arr, k) {
  if (k === 0) return arr;
  let len = arr.length;
  k = k%len;
  arr = reverseArr(0, len-k-1, arr);
  arr = reverseArr(len-k, len-1, arr);
  arr = reverseArr(0, len-1, arr);
  return arr;
};

const reverseArr = (start, end, arr) =>{
  while(start < end){
    let temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--
  }
  return arr;
}

let arr = [1,2,3,4,5,6];
let k = 1;
console.log("output: ", rotate(arr, k));