function twoStrings(s1, s2) {
    let s2Map = new Map();
    for(let i = 0; i < s2.length; i++){
      s2Map.set(s2[i], i);
    }
    for(let i = 0; i < s1.length; i++){
      if(s2Map.get(s1[i]) !== undefined){
        return 'YES'
      }
    }
    return 'NO';
  }
  
  
  let s1 = 'aardvark';
  let s2 = 'apple';
  console.log('output',twoStrings(s1, s2));