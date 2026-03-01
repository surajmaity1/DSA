class Node {
  constructor() {
    this.links = new Array(26);
    this.flag = false;
  }

  // Check whether the node contains the specific key (character)
  containsKey(character) {
    return (
      this.links[character.charCodeAt(0) - "a".charCodeAt(0)] !== undefined
    );
  }

  // Insert a new node with the specific key (character)
  insert(character, node) {
    return (this.links[character.charCodeAt(0) - "a".charCodeAt(0)] = node);
  }

  // Fetch the node with the specific key (character)
  get(character) {
    return this.links[character.charCodeAt(0) - "a".charCodeAt(0)];
  }

  // Set the node as end of the word
  setEnd() {
    this.flag = true;
  }

  // Get the flag of the node that helps to identify it's end of word or not
  getEnd() {
    return this.flag;
  }
}

export class Trie {
  constructor() {
    this.root = new Node();
  }

  // O(k) where k is length of string
  insert(word) {
    let node = this.root;

    for (let index = 0; index < word.length; index++) {
      const character = word[index];

      // character is not present in the trie
      if (!node.containsKey(character)) {
        node.insert(character, new Node());
      }

      // As character is present, move to next node
      node = node.get(character);
    }

    // Mark the end of the word
    node.setEnd();
  }

  // O(k) where k is length of string
  startsWith(word) {
    let traverse = this.root;

    for (let index = 0; index < word.length; index++) {
      const element = word[index];

      if (!traverse.containsKey(element)) {
        return false;
      }

      traverse = traverse.get(element);
    }

    return true;
  }

  // O(k) where k is length of string
  search(word) {
    let traverse = this.root;

    for (let index = 0; index < word.length; index++) {
      const element = word[index];

      if (!traverse.containsKey(element)) {
        return false;
      }

      traverse = traverse.get(element);
    }

    return traverse.getEnd();
  }
}

function main() {
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("boy");
  trie.insert("apply");

//   console.log(trie.startsWith("app"));
//   console.log(trie.startsWith("oy"));
//   console.log(trie.search("appl"));
//   console.log(trie.search("appy"));
}

main();
