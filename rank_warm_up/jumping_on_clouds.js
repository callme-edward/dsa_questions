function jumpingOnClouds(arr, n) {
    let count = 0;
    for(let i = 0; i < n;){
      if( i < n - 2){
        if(arr[i + 2] !== 1){
          count++;
          i += 2;
        }
        else if(arr[i + 2] === 1){
          count++;
          i++;
        }
      }
      else{
        if(arr[i + 1] === 0){
          count++;
        }
        i++;
      }
    }
    return count;
}
const arr = [0, 0, 1, 0, 0, 1, 0];
const n = 7;
console.log(`output: `,jumpingOnClouds(arr, n));