export class Comparator {
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }
    return a > b ? 1 : -1;
  }

  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  greaterThanOrEqual(firstItem, secondItem) {
    return (
      this.compare(firstItem, secondItem) === 1 ||
      this.equal(firstItem, secondItem)
    );
  }

  lessThanOrEqual(firstItem, secondItem) {
    return (
      this.compare(firstItem, secondItem) === -1 ||
      this.equal(firstItem, secondItem)
    );
  }
}
