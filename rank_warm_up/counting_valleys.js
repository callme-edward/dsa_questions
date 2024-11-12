function countingValleys(path, str) {
    let count = 0;
  let curr = 0;
  for(let i = 0; i < path; i++){
    if(str[i] === 'U'){
      curr++;
    }
    if(str[i] === 'D'){
      if(curr === 0) count += 1;
      curr--;
    }
  }
  return count;
}
const str = 'UDDDUDUU';
const n = 8;
console.log(`output: `,countingValleys(n, str));