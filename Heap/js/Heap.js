import { Comparator } from "../../utils/Comparator";

export class Heap {
  constructor(comparatorFunction) {
    this.heapArray = [];
    this.compare = new Comparator(comparatorFunction);
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

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
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

  heapifyUp(startIndex) {
    let currentIndex = startIndex || this.heapArray.length - 1;

    while (
      this.hasParent(currentIndex) &&
      !this.pairsInCorrectOrder(
        this.parent(currentIndex),
        this.heapArray[currentIndex]
      )
    ) {
      let parentIndex = this.getParentIndex(currentIndex);
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  heapifyDown(startIndex = 0) {
    let currentIndex = startIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.pairsInCorrectOrder(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      // check for parent and child node (left or right) are correct order
      if (
        this.pairsInCorrectOrder(
          this.heapArray[currentIndex],
          this.heapArray[nextIndex]
        )
      ) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  pairsInCorrectOrder(firstItem, secondItem) {
    // override in child class
  }
}
