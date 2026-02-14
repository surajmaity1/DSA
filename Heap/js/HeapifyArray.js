function maxHeapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    maxHeapify(arr, n, largest);
  }
}

function buildMaxHeap(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }

  return arr;
}

const arr = [4, 10, 3, 5, 1, 15, 2, 7, 8, 6];
console.log("Original array:", arr);

buildMaxHeap(arr);
console.log("Max heap:", arr);

function isMaxHeap(arr) {
  const n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[i] < arr[left]) return false;
    if (right < n && arr[i] < arr[right]) return false;
  }
  return true;
}

console.log("\nVerification - Is valid max heap?", isMaxHeap(arr));
