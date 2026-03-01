import { Comparator } from "../../utils/Comparator.js";

class MaxHeap {
  constructor() {
    this.heapArray = [];
    this.comparator = new Comparator();
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
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

  parent(childIndex) {
    return this.heapArray[this.getParentIndex(childIndex)];
  }

  swap(firstIndex, secondIndex) {
    const temp = this.heapArray[firstIndex];
    this.heapArray[firstIndex] = this.heapArray[secondIndex];
    this.heapArray[secondIndex] = temp;
  }

  peek() {
    if (this.heapArray.length === 0) {
      return null;
    }

    return this.heapArray[0];
  }

  add(nodeValue) {
    this.heapArray.push(nodeValue);
    this.heapifyUp();
  }

  poll() {
    if (this.heapArray.length === 0) {
      return null;
    }

    if (this.heapArray.length === 1) {
      return this.heapArray.pop();
    }

    const item = this.heapArray[0];

    // replace last element from the end to head
    this.heapArray[0] = this.heapArray.pop();
    this.heapifyDown();

    return item;
  }

  isEmpty() {
    return this.heapArray.length === 0;
  }

  toString() {
    return this.heapArray.join(",");
  }

  heapifyUp(startingNodeIndex = 0) {
    let currentNodeIndex = startingNodeIndex || this.heapArray.length - 1;

    while (currentNodeIndex > 0) {
      const parentIndex = this.getParentIndex(currentNodeIndex);
      if (this.heapArray[currentNodeIndex] <= this.heapArray[parentIndex]) {
        break;
      }
      this.swap(parentIndex, currentNodeIndex);
      currentNodeIndex = parentIndex;
    }
  }

  heapifyDown(startingNodeIndex = 0) {
    let currentNodeIndex = startingNodeIndex;

    while (
      (this.hasLeftChild(currentNodeIndex) &&
        this.heapArray[currentNodeIndex] < this.leftChild(currentNodeIndex)) ||
      (this.hasRightChild(currentNodeIndex) &&
        this.heapArray[currentNodeIndex] < this.rightChild(currentNodeIndex))
    ) {
      const hasLeftChild = this.hasLeftChild(currentNodeIndex);
      const hasRightChild = this.hasRightChild(currentNodeIndex);
      const leftChildIndex = this.getLeftChildIndex(currentNodeIndex);

      if (hasLeftChild && hasRightChild) {
        const left = this.leftChild(currentNodeIndex);
        const right = this.rightChild(currentNodeIndex);
        const rightChildIndex = this.getRightChildIndex(currentNodeIndex);

        if (left >= right) {
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

  find(node, compare = this.comparator) {
    const foundIndices = [];

    for (let index = 0; index < this.heapArray.length; index++) {
      const element = this.heapArray[index];
      if (compare.equal(element, node)) {
        foundIndices.push(index);
      }
    }

    return foundIndices;
  }

  remove(removeNode) {
    let totalNodeFound = this.find(removeNode).length;

    while (totalNodeFound-- > 0) {
      const removeNodeIndex = this.find(removeNode).pop();

      if (removeNodeIndex === this.heapArray.length - 1) {
        this.heapArray.pop();
        continue;
      }

      this.heapArray[removeNodeIndex] = this.heapArray.pop();
      const parent = this.parent(removeNodeIndex);
      const hasLeftChild = this.hasLeftChild(removeNodeIndex);

      if (
        hasLeftChild &&
        (!parent ||
          this.comparator.greaterThanOrEqual(
            parent,
            this.heapArray[removeNodeIndex]
          ))
      ) {
        this.heapifyDown(removeNodeIndex);
      } else {
        this.heapifyUp(removeNodeIndex);
      }
    }

    return this;
  }
}

export default MaxHeap;
