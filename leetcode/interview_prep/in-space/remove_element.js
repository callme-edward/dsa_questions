var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

// Other Solution
var removeElement = function(arr, val) {
    let len = arr.length;
    let i = 0;
    let j = len -1;
    let count = 0;
    for(let k = 0; k < len; k++){
      if(arr[k] !== val) count++;
    }
    while( i < len){
      if(arr[j] === val){
        arr[j] = '_'
        j--;
      }
      if(arr[i] === val){
        if(arr[j] !== val){
          console.log("arr[j", arr[j])
          arr[i] = arr[j];
          arr[j] = '_'
          j--;
        }
        else{
          j--;
        }
      }
      i++;
    }
    return `${count}, nums = ${arr}`;
  };
  
  let nums = [0,1,2,2,3,0,4,2], val = 2;
  // Output: 5, nums = [0,1,4,0,3,_,_,_]
  console.log("output: ", removeElement(nums, val))