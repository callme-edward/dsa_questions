function freqQuery(arr) {
    let countMap = new Map();
    let arr1 = [];
    const len = arr.length;
    for(let num of arr){
        if(num[0] === 1) {
          countMap.set(num[1], (countMap.get(num[1]) || 0) + 1);
        }
        if(num[0] === 2 && countMap.get(num[1])){
          countMap.set(num[1], countMap.get(num[1]) - 1);
        }
        if(num[0] === 3){
          const value = [...countMap.values()].some(v => v >= num[1]);
          if(value) arr1.push(1)
          else arr1.push(0);
        }
    }
    return arr1.length;
}

console.log('output', freqQuery(arrayOfArrays));