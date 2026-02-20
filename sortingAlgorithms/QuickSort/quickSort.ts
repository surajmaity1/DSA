function swap(input: number[], oneIndex: number, anotherIndex: number) {
  // swap
  const temp = input[oneIndex];
  input[oneIndex] = input[anotherIndex];
  input[anotherIndex] = temp;
}

function lomutoPartition(input: number[], low: number, high: number) {
  const pivot = input[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (pivot > input[j]) {
      i++;
      swap(input, i, j);
    }
  }

  swap(input, i + 1, high);

  return i + 1;
}

function partition(input: number[], low: number, high: number): number {
  const pivot = input[low];
  let pivotIndex = low;

  let leftPointer = low;
  let rightPointer = high;

  while (leftPointer < rightPointer) {
    while (pivot >= input[leftPointer] && leftPointer < high) {
      leftPointer++;
    }

    while (pivot < input[rightPointer] && rightPointer > low) {
      rightPointer--;
    }

    if (leftPointer < rightPointer) {
      const temp = input[leftPointer];
      input[leftPointer] = input[rightPointer];
      input[rightPointer] = temp;
    }
  }

  input[pivotIndex] = input[rightPointer];
  input[rightPointer] = pivot;
  pivotIndex = rightPointer;

  return pivotIndex;
}

function quickSort(input: number[], low: number, high: number) {
  if (low < high) {
    const partitionIndex = partition(input, low, high);
    // const partitionIndex = lomutoPartition(input, low, high);
    quickSort(input, low, partitionIndex - 1);
    quickSort(input, partitionIndex + 1, high);
  }
}

function main() {
  const input = [4, 6, 2, 5, 7, 9, 1, 3];
  console.log(`Before sort: ${input.join(", ")}`);
  quickSort(input, 0, input.length - 1);
  console.log(`After sort:  ${input.join(", ")}`);
}

main();
