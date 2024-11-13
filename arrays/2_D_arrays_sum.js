/* 
0 -4 -6 0 -7 -6
-1 -2 -6 -8 -3 -1
-8 -4 -2 -8 -8 -6
-3 -1 -2 -5 -7 -4
-3 -5 -3 -6 -6 -6
-3 -6 0 -8 -6 -7
 */
// -9 -9 1 0 -9 -9 1

const hourglassSum = (arr) => {
    const hourglassPattern = [
        [0, 0], [0, 1], [0, 2],
                 [1, 1],
        [2, 0], [2, 1], [2, 2]
    ];
    let maxSum = -Infinity;
    for (let i = 0; i <= arr.length - 3; i++) {
        for (let j = 0; j <= arr[i].length - 3; j++) {
            let currentSum = 0;
            hourglassPattern.forEach(([dx, dy]) => {
                console.log("dx, dy: ",arr[i + dx][j + dy]);
                currentSum += arr[i + dx][j + dy];
            });
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}
const arr = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7]
];


console.log("output: ", hourglassSum(arr));