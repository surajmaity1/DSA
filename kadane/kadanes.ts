function kadane(arr: number[]): {
  maxiumSum: number;
  subArray: number[];
} {
  let sum = 0,
    maxiumSum = 0,
    startIndex = -1,
    endIndex = -1,
    start = -1;

  for (let index = 0; index < arr.length; index++) {
    if (sum === 0) {
      start = index;
    }

    sum += arr[index]!;

    if (sum < 0) {
      sum = 0;
    }

    if (maxiumSum < sum) {
      maxiumSum = sum;

      startIndex = start;
      endIndex = index;
    }
  }

  return {
    maxiumSum,
    subArray: arr.slice(startIndex, endIndex + 1),
  };
}

function main() {
  const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
  const {maxiumSum, subArray} = kadane(arr);

  console.log(`Maximum sum: ${maxiumSum}`)
  console.log(`Sub array of maximum sum: [${subArray}]`)
}

main();
