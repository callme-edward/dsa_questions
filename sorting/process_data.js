function processData(input) {
    const arr = input.split('\n');
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
      const [name, score] = arr[i].split(' ');
      arr1.push([name,score])
    }
    arr1.sort((a,b) => {
      if(b[1] > a[1]) return b[1] - a[1];
      if(b[1] < a[1]) return b[1] - a[1]
      else if(b[1] === a[1]){
        return a[0].localeCompare(b[0]);
      }
    });
    return arr1.join('\n').split(',').join(' ');
}

const input = `david 100
amy 100
heraldo 50
aakansha 75
aleksa 150`
console.log(processData(input));