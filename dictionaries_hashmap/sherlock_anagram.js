function sherlockAndAnagrams(s) {
    let map = new Map();
    const len = s.length;
    for(let i = 0; i < len; i++){
      for(let j = i + 1; j <= len; j++){
        let sub = s.substring(i,j);
        if(sub != ""){
          sub = sub.split('').sort().join('');
          map.set(sub, (map.get(sub) || 0) + 1); 
        }
      }
    }
    let count = 0;
    for(let value of map.values()){
      count += (value * (value - 1))/2;
    }
    return count;
  }
  
  
  const str = 'abba';
  console.log("output:", sherlockAndAnagrams(str));