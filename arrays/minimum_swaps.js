const arr  = [2,3,4,1,5];
const n = 5;

const minimumSwaps = (arr, n) =>{
  let swap = 0;
  let arrMap = new Map(arr.map((a, i) => [a, i]));
  
  for(let i = 0; i < n; i++){
    if(arr[i] != i + 1){
      const index = arrMap.get(i+1);
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
      arrMap.set(arr[index], index);
       arrMap.set(arr[i], i);
      swap++
    }      
  }
  return swap;
}

console.log("output: ", minimumSwaps(arr, n));