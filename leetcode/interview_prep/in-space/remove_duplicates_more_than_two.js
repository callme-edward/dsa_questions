// return array.length with elements appear more upto 2 times 
// output for below code must be [0,0,1,1,2,3,3,---] afterward does not matter. so output is 7.


let arr = [0,0,1,1,1,1,2,3,3];

var removeDuplicatesMoreThanTwo = function(arr) {
  let pos = 1;
  let freq = 1;
  for(let i = 1; i < arr.length; i++){
    if(arr[i-1] === arr[i]){
      freq++;
    }
    else{
      freq  = 1;
    }
    console.log("freq: ", freq);
    if(freq <= 2){
      console.log('before-> ',arr);
      arr[pos] = arr[i];
      pos++;
      console.log('after-> ',arr);
    }
  }
  return pos;
};
console.log("output: ", removeDuplicates(arr));



