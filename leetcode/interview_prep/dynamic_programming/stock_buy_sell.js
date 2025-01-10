
var maxProfit = function(arr) {
  let profit = 0;
  let buy = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > buy){
      profit = Math.max(profit, arr[i] - buy);;
    }
    else{
      buy = arr[i];;
    }
  }
  return profit;
};