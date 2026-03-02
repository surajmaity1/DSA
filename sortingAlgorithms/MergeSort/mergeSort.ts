function merge(input: number[], low: number, middle: number, high: number) {
  const space = [];

  let firstIndex = low;
  let secondIndex = middle + 1;
  let spaceIndex = low;

  while (firstIndex <= middle && secondIndex <= high) {
    if (input[firstIndex] < input[secondIndex]) {
      space[spaceIndex++] = input[firstIndex++];
    } else {
      space[spaceIndex++] = input[secondIndex++];
    }
  }

  while (firstIndex <= middle) {
    space[spaceIndex++] = input[firstIndex++];
  }

  while (secondIndex <= high) {
    space[spaceIndex++] = input[secondIndex++];
  }

  for (let index = low; index <= high; index++) {
    input[index] = space[index];
  }
}

function recursiveMergeSort(input: number[], low: number, high: number) {
  if (low < high) {
    const middle = Math.floor(low + (high - low) / 2);
    recursiveMergeSort(input, low, middle);
    recursiveMergeSort(input, middle + 1, high);
    merge(input, low, middle, high);
  }
}

function main() {
  const input = [4, 6, 2, 5, 7, 9, 1, 3];
  console.log(`Before sort: ${input.join(", ")}`);
  recursiveMergeSort(input, 0, input.length - 1);
  console.log(`After sort:  ${input.join(", ")}`);
}

main();
