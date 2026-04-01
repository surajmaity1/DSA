/* 
Build a Cache
Ask questions to get the requirements
It stores strings
Input cannot be empty
[Don't make random assumptions]
Size of the input: 100 characters(for each input)

Number of items in the cache
What to delete first if cache gets filled: Least used will
be removed.
LRU - Least Recently Used.

How are we trying to remove the cache? Why do we need to remove elements from a cache?
Expiry date for cache: 20 seconds

What are the operations a cache should support? Read and Write Operations.
Update the Cache when you read.

Cache operates with keys and values

What does the cache look like?
What does code look like in terms of public APIs.

Distributed Systems: Different components working together
but for the end user it looks like single system
Web API - Distributed System

Work on:
asking the right questions, gathering requirements, solutioning, writing code, writing test.
*/

type cache = {
  value: string;
  found: boolean;
  performCacheSearch: boolean;
};

type storageValue = {
  value: string;
  searchOccurrence: number;
};

export type storage = {
  key: number;
  value: string;
};

const mainStorage: Map<number, string> = new Map();
const cacheStorage: Map<number, storageValue> = new Map();
const MAX_CACHE_VALUE_LIMIT = 20;
const MAX_CACHE_TIME_LIMIT = 20;

function insertCache(key: number, value: string, searchOccurrence: number) {
  if (cacheStorage.size >= MAX_CACHE_VALUE_LIMIT) {
    deleteCache();
  }
  cacheStorage.set(key, { value, searchOccurrence });
}

function deleteCache() {
  let leastSearchOccurrenceKey = Number.POSITIVE_INFINITY;

  for (const [key, value] of cacheStorage.entries()) {
    if (value.searchOccurrence < leastSearchOccurrenceKey) {
      leastSearchOccurrenceKey = key;
    }
  }

  console.log(`deleted value: ${leastSearchOccurrenceKey}`);
  cacheStorage.delete(leastSearchOccurrenceKey);
}

export function search(key: number): cache {
  const chacheStorageValue = cacheStorage.get(key);

  if (!chacheStorageValue) {
    const mainStorageValue = mainStorage.get(key);

    if (!mainStorageValue) {
      return { value: "", found: false, performCacheSearch: false };
    }

    insertCache(key, mainStorageValue, 1);

    return {
      value: mainStorageValue,
      found: true,
      performCacheSearch: false,
    };
  }

  const { value, searchOccurrence } = chacheStorageValue;
  chacheStorageValue.searchOccurrence = searchOccurrence + 1;

  return {
    value,
    found: true,
    performCacheSearch: true,
  };
}

export function insert(storage: storage[]) {
  for (let index = 0; index < storage.length; index++) {
    const data: storage = storage[index];
    mainStorage.set(data.key, data.value);
  }
}

export function clearCache(someOperation: any) {
  setInterval(() => {
    // console.log("20 seconds have passed:", new Date().toLocaleTimeString());
    // console.log("clearning the cache...");
    cacheStorage.clear();
    // console.log("cache cleared...");
    someOperation();
  }, MAX_CACHE_TIME_LIMIT * 1000);
}
