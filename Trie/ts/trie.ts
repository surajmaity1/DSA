function createNode(value?: string) {
  return {
    value: value,
    links: new Array<any>(26),
    isEndOfWord: false,
  }
}

function getIndex(index: string): number {
  return index.charAt(0)
    .toLowerCase().charCodeAt(0) - 97;
}

function containsKey(node: any, index: number) {
  return node.links[index] !== undefined;
}

function insert(root: any, word: string): any {
  if (!word || word.length === 0) {
    return root;
  }

  let current: any = root;

  for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
    const index: number = getIndex(word[wordIndex]);

    if (!containsKey(current, index)) {
      current.links[index] = createNode();
    }

    current = current.links[index];
  }

  current.value = word;
  current.isEndOfWord = true;

  return root;
}

function search(root: any, word: string): boolean {
  return searchHelper(root, word, true);
}

function isPrefix(root: any, word: string): boolean {
  return searchHelper(root, word, false);
}

function searchHelper(root: any, word: string, completeWordSearch: boolean): boolean {
  if (!word || word.length === 0) {
    return false;
  }

  let currentNode = root;

  for (let wordIndex: number = 0; wordIndex < word.length; wordIndex++) {
    const index: number = getIndex(word[wordIndex]);

    if (!currentNode.links[index]) {
      return false;
    }

    currentNode = currentNode.links[index];
  }

  if (completeWordSearch) {
    return currentNode.isEndOfWord;
  }

  return true;
}

function deletion(root: any, word: string) {
  if (!word || word.length === 0) {
    return {root, found: false};
  }

  let currentNode = root;
  let prefixNode = null;

  for (let wordIndex: number = 0; wordIndex < word.length; wordIndex++) {
    const index: number = getIndex(word[wordIndex]);

    if (!currentNode.links[index]) {
      return {root, found: false};
    }

    if (currentNode.value === word) {
      currentNode.value = null;
      currentNode.isEndOfWord = false;
      currentNode.links = null;
      prefixNode.links[index] = null;

      return {root, found: true};
    }

    prefixNode = currentNode;
    currentNode = currentNode.links[index];
  }

  return {root, found: false};
}

function main() {
  let root = createNode("");

  root = insert(root, "apply");
  root = insert(root, "boy");
  // root = insert(root, "apple");
  // root = insert(root, "application");
  // root = insert(root, "mango");

  const searchWord = "boy";
  console.log(`Is ${searchWord} word present? : ${search(root, searchWord)}`);

  const prefixWord = "bo";
  console.log(`Is ${prefixWord} word a prefix? : ${isPrefix(root, prefixWord)}`);

  const deleteWord = "boy";
  let found: boolean;
  ({root, found} = deletion(root, deleteWord));
  console.log(`Is ${deleteWord} word deleted? : ${found}`);
}

main();