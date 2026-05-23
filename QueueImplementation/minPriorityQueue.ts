type Queue = {
  size: number;
  storage: number[];
};

export const peek = (queue: Queue): number | undefined => {
  return queue.storage[0];
};

export const minPriorityQueue = (): Queue => {
  return {
    size: 0,
    storage: [],
  };
};

export const enqueue = (queue: Queue, value: string, priority: number) => {
    
}