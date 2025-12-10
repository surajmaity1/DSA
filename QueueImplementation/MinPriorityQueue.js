import MinHeap from "../Heap/js/MinHeap.js";

export class MinPriorityQueue extends MinHeap {
  constructor() {
    this.heapArray = [];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  parent(childIndex) {
    return this.heapArray[this.getParentIndex(childIndex)];
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapArray.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapArray.length;
  }

  leftChild(parentIndex) {
    return this.heapArray[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    return this.heapArray[this.getRightChildIndex(parentIndex)];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  swap(firstIndex, secondIndex) {
    const temp = this.heapArray[firstIndex];
    this.heapArray[firstIndex] = this.heapArray[secondIndex];
    this.heapArray[secondIndex] = temp;
  }

  minHeapMinimum() {
    if (this.heapArray.length === 0) {
      return null;
    }

    return this.heapArray[0];
  }

  minHeapExtractMin() {
    if (this.heapArray.length === 0) {
      return null;
    }

    const min = this.heapArray[0];
    this.heapArray[0] = this.heapArray.pop();

    this.minHeapify();
    return min;
  }

  minHeapDecreaseKey(node, key) {
    if (key > node.key) {
      return null;
    }

    node.key = key;
    let index = this.heapArray.length - 1;

    while (index >= 0 && this.parent(index) > this.heapArray[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  minHeapInsert(node, key) {
    this.heapArray[this.heapArray.length] = Number.MAX_VALUE;
    this.minHeapDecreaseKey(node, key);
  }

  // TODO: Implement minHeapify
  minHeapify(startIndex = 0) {
    let currentNodeIndex = startingNodeIndex;

    while (
      (this.hasLeftChild(currentNodeIndex) &&
        this.heapArray[currentNodeIndex] > this.leftChild(currentNodeIndex)) ||
      (this.hasRightChild(currentNodeIndex) &&
        this.heapArray[currentNodeIndex] > this.rightChild(currentNodeIndex))
    ) {
      const hasLeftChild = this.hasLeftChild(currentNodeIndex);
      const hasRightChild = this.hasRightChild(currentNodeIndex);
      const leftChildIndex = this.getLeftChildIndex(currentNodeIndex);

      if (hasLeftChild && hasRightChild) {
        const left = this.leftChild(currentNodeIndex);
        const right = this.rightChild(currentNodeIndex);
        const rightChildIndex = this.getRightChildIndex(currentNodeIndex);

        if (left <= right) {
          this.swap(currentNodeIndex, leftChildIndex);
          currentNodeIndex = leftChildIndex;
        } else {
          this.swap(currentNodeIndex, rightChildIndex);
          currentNodeIndex = rightChildIndex;
        }
      } else if (hasLeftChild) {
        this.swap(currentNodeIndex, leftChildIndex);
        currentNodeIndex = leftChildIndex;
      }
    }
  }
}
