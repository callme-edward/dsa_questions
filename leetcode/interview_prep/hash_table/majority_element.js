var majorityElement = function(arr) {
    let map = new Map();
    let max = arr.length/2;
    for(let i = 0; i < arr.length; i++){
      map.set(arr[i], (map.get(arr[i]) || 0) + 1);
      if(map.get(arr[i]) > max) return arr[i]; 
    }
};