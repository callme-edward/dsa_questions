
var canJump = function(arr) {
    let maxIndex = 0;
    for(let i = 0; i < arr.length; i++){
      if(maxIndex < i){
        return false;
      }
      maxIndex = Math.max(maxIndex,  arr[i] + i)
    }
    return true
};
