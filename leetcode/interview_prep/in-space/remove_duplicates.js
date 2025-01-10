let nums = [0,0,1,1,1,2,2,3,3,4];
// let nums = [1,1,2];
/*
first k number should be unique in above decreasing order and after that other elements can be anything.
  */

var removeDuplicates = function(nums) {
    let count = 1;
    let curr = 1
    for(let j = 1; j < nums.length; j++){
      if(nums[curr-1] !== nums[j]){
        nums[curr] = nums[j];
        curr += 1;
        count++;
      }
      
    }
    return count;
};


/*
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/
console.log("output: ", removeDuplicates(nums));
