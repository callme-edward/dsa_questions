function sockMerchant(n, arr) {
    let obj = new Map();
    for(let i = 0; i < n; i++){
        if(obj.get(arr[i])) obj.set(arr[i], obj.get(arr[i]) + 1);
        else obj.set(arr[i], 1);
    }
    let count =  0;
    for(const [key, value] of obj){
      if(value >= 2){
        if(value % 2 === 0) count += (value/2);
        else count += Math.floor(value/2);
      }
      
    }
    return count
}
const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = 9;
console.log(`output: `,sockMerchant(n, arr));