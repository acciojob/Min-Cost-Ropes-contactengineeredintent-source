function mincost(arr)
{ 
//write your code here
// return the min cost
	let cost = 0;
    while (arr.length > 1) {
    let tempCost = 0;
    arr.sort();
    // console.log(arr);
    let min = 0;
    let secMin = 1;
    tempCost += arr[min]+arr[secMin];
    // console.log(cost);
    arr.shift();
    arr.shift();
    arr.push(tempCost);
    cost += tempCost;
    // console.log(arr);
    // break;
  }
  return cost;
  
}

module.exports=mincost;
