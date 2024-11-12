function returnCount(s, n){
    let i = 0;
    let count = 0
    while(i < n){
      if(s[i] === 'a') count++;
      i++;
    }
    return count;
  }
  
  function repeatedString(s, n) {
      const len = s.length;
      if(s == 'a') return n;
      if(n === 0 || len === 0) return 0;
      else{
        let count = returnCount(s, len);
        const rem = n%len;
        if(rem === 0){
          const div = n/len;
          return div * count;
        }
        else{
          const div = Math.floor(n/len);
          const result = count * div;
          let remCount = returnCount(s, rem);
          return result + remCount;
        }
      }
  }
  
  const str = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'
  const n = 736778906400
  
  // const str = 'abaa';
  // const n = 10;
  console.log(`output: ${repeatedString(str, n)}`)