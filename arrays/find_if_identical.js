const arr1  = [1,2,2,4,5,8,0,8];
const arr2 = [8,1,2,4,5,4,0,8];

const compareArr = (arr1, arr2) =>{
  const arrMap = new Map();
  let isIdentical = true;
  for(let num of arr1){
    arrMap.set(num, (arrMap.get(num) || 0) + 1);
  }
  for(let num of arr2){
    if(!arrMap.has(num) || arrMap.get(num) === 0) isIdentical = false;
    arrMap.set(num, arrMap.get(num)-1);
  }
  for(let count of arrMap.values()){
    if(count !== 0) isIdentical = false;
  }
  return isIdentical;
}

console.log("output: ", compareArr(arr1, arr2));

