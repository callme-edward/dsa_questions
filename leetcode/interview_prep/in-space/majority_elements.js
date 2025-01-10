// let arr = [2,2,1,1,1,2,2];
let arr = [3,2,3];

var majorityElement = function(arr) {
    let map = new Map();
    let max = arr.length/2;
    for(let i = 0; i < arr.length; i++){
      map.set(arr[i], (map.get(arr[i]) || 0) + 1);
      if(Math.max(max, map.get(arr[i])) > max && map.get(arr[i]) > (arr.length/2)){
        elem = arr[i];
      }
      else{
        max = Math.max(max, map.get(arr[i]));
      }
    }
    return elem;
};
console.log("output: ", majorityElement(arr));