import { Trie } from "../../Trie/trie.js";

export const createTrie = () => {
  const trie = new Trie();
  trie.insert("apply");
  trie.insert("boy");
  return trie;
};
