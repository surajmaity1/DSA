/*
You are given an array of integers. Your task is to find
the length of the longest sequence of consecutive integers
that can be formed using the elements from the array.

For example, if you have the array [100, 4, 200, 1, 3, 2],
the longest consecutive sequence would be [1, 2, 3, 4],
which has a length of 4.
*/

//Brute Force solution
/*
export function longestSequenceConsecutiveIntegers(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  let result: number = 0;
  let tempMax: number = 0;
  const sortedArray = [...array].sort((a: number, b: number): number => a - b);

  for (let index: number = 1; index < sortedArray.length; index++) {
    const previousElement: number = sortedArray[index - 1];
    const currentElement: number = sortedArray[index];
    
    if (currentElement - previousElement === 1) {
      tempMax++;
    } else {
      result = Math.max(result, tempMax);
      tempMax = 0;
    }
  }

  return Math.max(result, tempMax) + 1;
}
*/

//Optimize solution
export function longestSequenceConsecutiveIntegers(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  let result: number = 0;
  
  return result;
}

function main() {
  const input: number[] = [100, 4, 200, 1, 3, 2];
  const result: number = longestSequenceConsecutiveIntegers(input);
  console.log(result);

}

main();
