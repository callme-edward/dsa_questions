const reverseArr = (start, end, arr) =>{
    console.log(start, end);
    while(start < end){
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      start++;
      end--
    }
    return arr;
  }
  
  const rotLeft = (arr, num, len) => {
      num = num%len; // this is useful in case of given rotation number > length
      arr = reverseArr(0, num - 1, arr);
      arr = reverseArr(num, len-1, arr);
      arr = reverseArr(0, len-1, arr);
      console.log("arr: ", arr);
      return arr;
      // return [...arr.splice(num, len), ...arr.splice(0, num)]
  }
  
  const arr = [1,2,3,4,5];
  const len = 5; 
  const num = 4; //[2,3,4,5,1], [3,4,5,1,2], [4,5,1,2,3], [5,1,2,3,4]
  console.log('output',rotLeft(arr, num, len));