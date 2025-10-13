import MaxHeap from "../Heap/js/MaxHeap.js";
import MinHeap from "../Heap/js/MinHeap.js";
import { expect } from "chai";

describe("MaxHeap", () => {
  it("should create an empty max heap", () => {
    const maxHeap = new MaxHeap();

    expect(maxHeap).to.be.not.undefined;
    expect(maxHeap.isEmpty()).to.be.equal(true);
    expect(maxHeap.peek()).to.be.equal(null);
  });

  it("should add items to the heap and heapify it up", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    expect(maxHeap.isEmpty()).to.be.equal(false);
    expect(maxHeap.peek()).to.be.equal(5);
    expect(maxHeap.toString()).to.be.equal("5");

    maxHeap.add(3);
    expect(maxHeap.peek()).to.be.equal(5);
    expect(maxHeap.toString()).to.be.equal("5,3");

    maxHeap.add(10);
    expect(maxHeap.peek()).to.be.equal(10);
    expect(maxHeap.toString()).to.be.equal("10,3,5");

    maxHeap.add(1);
    expect(maxHeap.peek()).to.be.equal(10);
    expect(maxHeap.toString()).to.be.equal("10,3,5,1");

    maxHeap.add(1);
    expect(maxHeap.peek()).to.be.equal(10);
    expect(maxHeap.toString()).to.be.equal("10,3,5,1,1");

    expect(maxHeap.poll()).to.be.equal(10);
    expect(maxHeap.toString()).to.be.equal("5,3,1,1");

    expect(maxHeap.poll()).to.be.equal(5);
    expect(maxHeap.toString()).to.be.equal("3,1,1");

    expect(maxHeap.poll()).to.be.equal(3);
    expect(maxHeap.toString()).to.be.equal("1,1");
  });

  it("should poll items from the heap and heapify it down", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(1);

    expect(maxHeap.toString()).to.be.equal("11,10,5,3,1");

    expect(maxHeap.poll()).to.be.equal(11);
    expect(maxHeap.toString()).to.be.equal("10,3,5,1");

    expect(maxHeap.poll()).to.be.equal(10);
    expect(maxHeap.toString()).to.be.equal("5,3,1");

    expect(maxHeap.poll()).to.be.equal(5);
    expect(maxHeap.toString()).to.be.equal("3,1");

    expect(maxHeap.poll()).to.be.equal(3);
    expect(maxHeap.toString()).to.be.equal("1");

    expect(maxHeap.poll()).to.be.equal(1);
    expect(maxHeap.toString()).to.be.equal("");

    expect(maxHeap.poll()).to.be.equal(null);
    expect(maxHeap.toString()).to.be.equal("");
  });

  it("should heapify down through the right branch as well", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);

    expect(maxHeap.toString()).to.be.equal("12,3,10");

    maxHeap.add(11);
    expect(maxHeap.toString()).to.be.equal("12,11,10,3");

    expect(maxHeap.poll()).to.be.equal(12);
    expect(maxHeap.toString()).to.be.equal("11,3,10");
  });

  it("should be possible to find item indices in heap", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.toString()).to.be.equal("12,11,10,3,11");

    expect(maxHeap.find(5)).to.be.eql([]);
    expect(maxHeap.find(12)).to.be.eql([0]);
    expect(maxHeap.find(11)).to.be.eql([1, 4]);
  });

  it("should be possible to remove items from heap with heapify down", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.toString()).to.be.equal("12,11,10,3,11");

    expect(maxHeap.remove(12).toString()).to.be.equal("11,11,10,3");
    expect(maxHeap.remove(12).peek()).to.be.equal(11);
    expect(maxHeap.remove(11).toString()).to.be.equal("10,3");
    expect(maxHeap.remove(10).peek()).to.be.equal(3);
  });

  it("should be possible to remove items from heap with heapify up", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(5);
    maxHeap.add(6);
    maxHeap.add(7);
    maxHeap.add(4);
    maxHeap.add(6);
    maxHeap.add(8);
    maxHeap.add(2);
    maxHeap.add(1);

    expect(maxHeap.toString()).to.be.equal("10,8,6,7,6,4,5,3,2,1");
    expect(maxHeap.remove(4).toString()).to.be.equal("10,8,6,7,6,1,5,3,2");
    expect(maxHeap.remove(3).toString()).to.be.equal("10,8,6,7,6,1,5,2");
    expect(maxHeap.remove(5).toString()).to.be.equal("10,8,6,7,6,1,2");
    expect(maxHeap.remove(10).toString()).to.be.equal("8,7,6,2,6,1");
    expect(maxHeap.remove(6).toString()).to.be.equal("8,7,1,2");
    expect(maxHeap.remove(2).toString()).to.be.equal("8,7,1");
    expect(maxHeap.remove(1).toString()).to.be.equal("8,7");
    expect(maxHeap.remove(7).toString()).to.be.equal("8");
    expect(maxHeap.remove(8).toString()).to.be.equal("");
  });

  it("should be possible to remove items from heap with custom finding comparator", () => {
    const maxHeap = new MaxHeap();
    maxHeap.add("a");
    maxHeap.add("bb");
    maxHeap.add("ccc");
    maxHeap.add("dddd");

    expect(maxHeap.toString()).to.be.equal("dddd,ccc,bb,a");
  });
});

describe("MinHeap", () => {
  it("should create an empty min heap", () => {
    const minHeap = new MinHeap();

    expect(minHeap).to.be.not.undefined;
    expect(minHeap.peek()).to.be.equal(null);
    expect(minHeap.isEmpty()).to.be.equal(true);
  });

  it("should add items to the heap and heapify it up", () => {
    const minHeap = new MinHeap();

    minHeap.add(5);
    expect(minHeap.isEmpty()).to.be.equal(false);
    expect(minHeap.peek()).to.be.equal(5);
    expect(minHeap.toString()).to.be.equal("5");

    minHeap.add(3);
    expect(minHeap.peek()).to.be.equal(3);
    expect(minHeap.toString()).to.be.equal("3,5");

    minHeap.add(10);
    expect(minHeap.peek()).to.be.equal(3);
    expect(minHeap.toString()).to.be.equal("3,5,10");

    minHeap.add(1);
    expect(minHeap.peek()).to.be.equal(1);
    expect(minHeap.toString()).to.be.equal("1,3,10,5");

    minHeap.add(1);
    expect(minHeap.peek()).to.be.equal(1);
    expect(minHeap.toString()).to.be.equal("1,1,10,5,3");

    expect(minHeap.poll()).to.be.equal(1);
    expect(minHeap.toString()).to.be.equal("1,3,10,5");

    expect(minHeap.poll()).to.be.equal(1);
    expect(minHeap.toString()).to.be.equal("3,5,10");

    expect(minHeap.poll()).to.be.equal(3);
    expect(minHeap.toString()).to.be.equal("5,10");
  });

  it("should poll items from the heap and heapify it down", () => {
    const minHeap = new MinHeap();

    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(10);
    minHeap.add(11);
    minHeap.add(1);

    expect(minHeap.toString()).to.be.equal("1,3,10,11,5");

    expect(minHeap.poll()).to.be.equal(1);
    expect(minHeap.toString()).to.be.equal("3,5,10,11");

    expect(minHeap.poll()).to.be.equal(3);
    expect(minHeap.toString()).to.be.equal("5,11,10");

    expect(minHeap.poll()).to.be.equal(5);
    expect(minHeap.toString()).to.be.equal("10,11");

    expect(minHeap.poll()).to.be.equal(10);
    expect(minHeap.toString()).to.be.equal("11");

    expect(minHeap.poll()).to.be.equal(11);
    expect(minHeap.toString()).to.be.equal("");

    expect(minHeap.poll()).to.be.equal(null);
    expect(minHeap.toString()).to.be.equal("");
  });

  it("should heapify down through the right branch as well", () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(12);
    minHeap.add(10);

    expect(minHeap.toString()).to.be.equal("3,12,10");

    minHeap.add(11);
    expect(minHeap.toString()).to.be.equal("3,11,10,12");

    expect(minHeap.poll()).to.be.equal(3);
    expect(minHeap.toString()).to.be.equal("10,11,12");
  });
  // ---------------------

  it('should be possible to find item indices in heap', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(12);
    minHeap.add(10);
    minHeap.add(11);
    minHeap.add(11);

    expect(minHeap.toString()).to.be.equal('3,11,10,12,11');

    expect(minHeap.find(5)).to.be.eql([]);
    expect(minHeap.find(3)).to.be.eql([0]);
    expect(minHeap.find(11)).to.be.eql([1, 4]);
  });

  it('should be possible to remove items from heap with heapify down', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(12);
    minHeap.add(10);
    minHeap.add(11);
    minHeap.add(11);

    expect(minHeap.toString()).to.be.equal('3,11,10,12,11');

    expect(minHeap.remove(3).toString()).to.be.equal('10,11,11,12');
    expect(minHeap.remove(3).peek()).to.be.equal(10);
    expect(minHeap.remove(11).toString()).to.be.equal('10,12');
    expect(minHeap.remove(3).peek()).to.be.equal(10);
  });

  it('should be possible to remove items from heap with heapify up', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(10);
    minHeap.add(5);
    minHeap.add(6);
    minHeap.add(7);
    minHeap.add(4);
    minHeap.add(6);
    minHeap.add(8);
    minHeap.add(2);
    minHeap.add(1);

    expect(minHeap.toString()).to.be.equal('1,2,4,6,3,5,6,10,8,7');
    expect(minHeap.remove(8).toString()).to.be.equal('1,2,4,6,3,5,6,10,7');
    expect(minHeap.remove(7).toString()).to.be.equal('1,2,4,6,3,5,6,10');
    expect(minHeap.remove(1).toString()).to.be.equal('2,3,4,6,10,5,6');
    expect(minHeap.remove(2).toString()).to.be.equal('3,6,4,6,10,5');
    expect(minHeap.remove(6).toString()).to.be.equal('3,5,4,10');
    expect(minHeap.remove(10).toString()).to.be.equal('3,5,4');
    expect(minHeap.remove(5).toString()).to.be.equal('3,4');
    expect(minHeap.remove(3).toString()).to.be.equal('4');
    expect(minHeap.remove(4).toString()).to.be.equal('');
  });

  it('should be possible to remove items from heap with custom finding comparator', () => {
    const minHeap = new MinHeap();
    minHeap.add('dddd');
    minHeap.add('ccc');
    minHeap.add('bb');
    minHeap.add('a');

    expect(minHeap.toString()).to.be.equal('a,bb,ccc,dddd');
  });

  it('should remove values from heap and correctly re-order the tree', () => {
    const minHeap = new MinHeap();

    minHeap.add(1);
    minHeap.add(2);
    minHeap.add(3);
    minHeap.add(4);
    minHeap.add(5);
    minHeap.add(6);
    minHeap.add(7);
    minHeap.add(8);
    minHeap.add(9);

    expect(minHeap.toString()).to.be.equal('1,2,3,4,5,6,7,8,9');

    minHeap.remove(2);
    expect(minHeap.toString()).to.be.equal('1,4,3,8,5,6,7,9');

    minHeap.remove(4);
    expect(minHeap.toString()).to.be.equal('1,5,3,8,9,6,7');
  });
});
