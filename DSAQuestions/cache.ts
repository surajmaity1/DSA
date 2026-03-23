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
};

const mainStorage = new Map();

const cacheStorage = new Map();

function search(key: number): string {
  if (key < 0) {
    return "Invalid key found";
  }

  const { value, found } = searchCache(key);

  if (found) {
    return value;
  }

  return "Not found";
}

function insertCache(key: number, value: string) {
  cacheStorage.set(key, value);
}

function searchCache(key: number): cache {
  const chacheStorageValue = cacheStorage.get(key);

  if (!chacheStorageValue) {
    const mainStorageValue = mainStorage.get(key);

    if (!mainStorageValue) {
      return { value: "", found: false };
    }

    insertCache(key, mainStorageValue);
    console.log("main storage used");

    return {
      value: mainStorageValue,

      found: true,
    };
  }

  console.log("cache storage used");

  return {
    value: chacheStorageValue,

    found: true,
  };
}

function initializeValue() {
  mainStorage.set(1, "Amit");
  mainStorage.set(2, "Arun");
  mainStorage.set(3, "Kav");
  mainStorage.set(4, "Abhi");
  mainStorage.set(5, "Arit");
}

initializeValue();

const id = 2;

console.log(`Find the person with id ${id}: ${search(id)}`);
console.log(`Find the person with id ${id}: ${search(id)}`);
