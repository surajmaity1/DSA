import { describe, it, expect } from "vitest";
import { clearCache, insert, search } from "../DSAQuestions/cache.ts";
import { testStorage } from "./fixtures/cache.ts";
import sinon from "sinon";

describe("cache", () => {
  let clock: sinon.SinonFakeTimers;

  beforeEach(() => {
    insert(testStorage);
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it("should search value from storage for the first time", () => {
    const key = 1;
    const result = search(key);
    expect(result.found).to.be.equal(true);
    expect(result.value).to.be.equal(testStorage[key - 1].value);
    expect(result.performCacheSearch).to.be.equal(false);
  });

  it("should search value from cache after first search", () => {
    const key = 6;
    search(key);
    const cacheStorage = search(key);
    expect(cacheStorage.found).to.be.equal(true);
    expect(cacheStorage.value).to.be.equal(testStorage[key - 1].value);
    expect(cacheStorage.performCacheSearch).to.be.equal(true);
  });

  it("should clear cache after 20 seconds", () => {
    const spy = sinon.spy();

    clearCache(spy);
    expect(spy.calledOnce).to.be.false;
    clock.tick(20001);
    const key = 1;
    const result = search(key);

    expect(spy.calledOnce).to.be.true;
    expect(result.found).to.be.equal(true);
    expect(result.value).to.be.equal(testStorage[key - 1].value);
    expect(result.performCacheSearch).to.be.equal(false);
  });

  it("should delete least search value when cache is full", () => {
    // search all keys one time
    for (let index = 0; index < testStorage.length; index++) {
      const element = testStorage[index];
      search(element.key);
    }

    // expect first key, search other keys, so searchOccurrent will be 2
    for (let index = 1; index < testStorage.length; index++) {
      const element = testStorage[index];
      search(element.key);
    }

    insert([{ key: 21, value: "Maggie" }]);

    expect(search(21).found).to.be.equal(true);
  });
});
