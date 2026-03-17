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

// draft: pending
function iterativeMergeSort(input: number[]) {
  const totalElements = input.length;
  let outerIndex, innerIndex, low, high, middle;

  // n = no. of elements
  // log(n) times
  for (
    outerIndex = 2;
    outerIndex <= totalElements;
    outerIndex = outerIndex * 2
  ) {
    // n times
    for (
      // let innerIndex = 0;
      innerIndex = 0;
      innerIndex + outerIndex - 1 < totalElements;
      innerIndex = innerIndex + outerIndex
    ) {
      // const low = innerIndex;
      low = innerIndex;
      // const high = innerIndex + outerIndex - 1;
      high = innerIndex + outerIndex - 1;
      // const middle = Math.floor(low + (high - low) / 2);
      middle = Math.floor(low + (high - low) / 2);

      merge(input, low, middle, high);
    }
  }

  console.log(
    `totalElements: ${totalElements}, outerIndex / 2: ${outerIndex / 2}`,
  );
  // check if odd no. of elements present
  if (outerIndex / 2 < totalElements) {
    console.log("odd there");
    merge(input, 0, Math.floor(outerIndex / 2 - 1), totalElements - 1);
  }
}

function main() {
  const input = [4, 6, 2, 5, 7, 9, 1, 3, 8, 0, 6.7];
  console.log(`Before sort: ${input.join(", ")}`);
  console.log("length:", input.length);
  recursiveMergeSort(input, 0, input.length - 1);

  // draft: pending
  // iterativeMergeSort(input);
  console.log(`After sort:  ${input.join(", ")}`);
}

main();
