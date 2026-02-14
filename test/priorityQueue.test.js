import { MinPriorityQueue } from "../QueueImplementation/MinPriorityQueue.js";

describe('MinPriorityQueue', () => {
  it('should create default priority queue', () => {
    // const minPriorityQueue = new MinPriorityQueue();

    // expect(minPriorityQueue).to.be.not.undefined;
    // expect(minPriorityQueue.isEmpty()).to.be.equal(true);
    // expect(minPriorityQueue.peek()).to.be.equal(null);
  });
  /*
  it('should insert items to the queue and respect priorities', () => {
    const minPriorityQueue = new MinPriorityQueue();

    minPriorityQueue.add(10, 1);
    expect(minPriorityQueue.peek()).toBe(10);

    minPriorityQueue.add(5, 2);
    expect(minPriorityQueue.peek()).toBe(10);

    minPriorityQueue.add(100, 0);
    expect(minPriorityQueue.peek()).toBe(100);
  });

  it('should be possible to use objects in priority queue', () => {
    const minPriorityQueue = new MinPriorityQueue();

    const user1 = { name: 'Mike' };
    const user2 = { name: 'Bill' };
    const user3 = { name: 'Jane' };

    minPriorityQueue.add(user1, 1);
    expect(minPriorityQueue.peek()).toBe(user1);

    minPriorityQueue.add(user2, 2);
    expect(minPriorityQueue.peek()).toBe(user1);

    minPriorityQueue.add(user3, 0);
    expect(minPriorityQueue.peek()).toBe(user3);
  });

  it('should poll from queue with respect to priorities', () => {
    const minPriorityQueue = new MinPriorityQueue();

    minPriorityQueue.add(10, 1);
    minPriorityQueue.add(5, 2);
    minPriorityQueue.add(100, 0);
    minPriorityQueue.add(200, 0);

    expect(minPriorityQueue.poll()).toBe(100);
    expect(minPriorityQueue.poll()).toBe(200);
    expect(minPriorityQueue.poll()).toBe(10);
    expect(minPriorityQueue.poll()).toBe(5);
  });

  it('should be possible to change priority of head node', () => {
    const minPriorityQueue = new MinPriorityQueue();

    minPriorityQueue.add(10, 1);
    minPriorityQueue.add(5, 2);
    minPriorityQueue.add(100, 0);
    minPriorityQueue.add(200, 0);

    expect(minPriorityQueue.peek()).toBe(100);

    minPriorityQueue.changePriority(100, 10);
    minPriorityQueue.changePriority(10, 20);

    expect(minPriorityQueue.poll()).toBe(200);
    expect(minPriorityQueue.poll()).toBe(5);
    expect(minPriorityQueue.poll()).toBe(100);
    expect(minPriorityQueue.poll()).toBe(10);
  });

  it('should be possible to change priority of internal nodes', () => {
    const minPriorityQueue = new MinPriorityQueue();

    minPriorityQueue.add(10, 1);
    minPriorityQueue.add(5, 2);
    minPriorityQueue.add(100, 0);
    minPriorityQueue.add(200, 0);

    expect(minPriorityQueue.peek()).toBe(100);

    minPriorityQueue.changePriority(200, 10);
    minPriorityQueue.changePriority(10, 20);

    expect(minPriorityQueue.poll()).toBe(100);
    expect(minPriorityQueue.poll()).toBe(5);
    expect(minPriorityQueue.poll()).toBe(200);
    expect(minPriorityQueue.poll()).toBe(10);
  });

  it('should be possible to change priority along with node addition', () => {
    const minPriorityQueue = new MinPriorityQueue();

    minPriorityQueue.add(10, 1);
    minPriorityQueue.add(5, 2);
    minPriorityQueue.add(100, 0);
    minPriorityQueue.add(200, 0);

    minPriorityQueue.changePriority(200, 10);
    minPriorityQueue.changePriority(10, 20);

    minPriorityQueue.add(15, 15);

    expect(minPriorityQueue.poll()).toBe(100);
    expect(minPriorityQueue.poll()).toBe(5);
    expect(minPriorityQueue.poll()).toBe(200);
    expect(minPriorityQueue.poll()).toBe(15);
    expect(minPriorityQueue.poll()).toBe(10);
  });

  it('should be possible to search in priority queue by value', () => {
    const minPriorityQueue = new MinPriorityQueue();

    minPriorityQueue.add(10, 1);
    minPriorityQueue.add(5, 2);
    minPriorityQueue.add(100, 0);
    minPriorityQueue.add(200, 0);
    minPriorityQueue.add(15, 15);

    expect(minPriorityQueue.hasValue(70)).toBe(false);
    expect(minPriorityQueue.hasValue(15)).toBe(true);
  });
  */
});
