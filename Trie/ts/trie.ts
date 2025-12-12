export function createNode(value?: string) {
  return {
    value: value,
    links: new Array<any>(26),
    isEndOfWord: false,
  };
}

function getIndex(index: string): number {
  return index.charAt(0).toLowerCase().charCodeAt(0) - 97;
}

function containsKey(node: any, index: number) {
  return node.links[index] !== undefined;
}

export function insert(root: any, word: string): any {
  if (!word || word.length === 0) {
    return root;
  }

  let current: any = root;

  for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
    const index: number = getIndex(word[wordIndex]);

    if (!containsKey(current, index)) {
      current.links[index] = createNode(word.substring(0, 1 + wordIndex));
    }

    current = current.links[index];
  }

  current.isEndOfWord = true;
  return root;
}

export function search(root: any, word: string): boolean {
  return searchHelper(root, word, true);
}

export function isPrefix(root: any, word: string): boolean {
  return searchHelper(root, word, false);
}

function searchHelper(
  root: any,
  word: string,
  completeWordSearch: boolean
): boolean {
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

export function deletion(root: any, word: string) {
  if (!word || word.length === 0) {
    return { root, found: false };
  }

  let currentNode = root;
  const stack = [root];

  for (let wordIndex: number = 0; wordIndex < word.length; wordIndex++) {
    const index: number = getIndex(word[wordIndex]);

    if (!currentNode.links[index]) {
      return { root, found: false };
    }

    currentNode = currentNode.links[index];
    stack.push(currentNode);

    if (currentNode.value === word && currentNode.isEndOfWord === true) {
      let poppedNode = stack.pop();
      let wordLength = word.length - 1;
      while (stack.length > 0 && !hasLinks(poppedNode)) {
        const newIndex = getIndex(poppedNode.value[wordLength--]);
        poppedNode = stack.pop();
        poppedNode.links[newIndex] = undefined;

        if (poppedNode.isEndOfWord) {
          return { root, found: true };
        }
      }

      return { root, found: true };
    }
  }

  return { root, found: false };
}

function hasLinks(node: any): boolean {
  for (let alphabet = 0; alphabet < 26; alphabet++) {
    if (node.links[alphabet]) {
      return true;
    }
  }

  return false;
}

function main() {
  let root = createNode("");

  root = insert(root, "apply");
  root = insert(root, "apple");
  root = insert(root, "apples");
  root = insert(root, "application");
  root = insert(root, "boy");
  root = insert(root, "mango");

  const searchWord = "boy";
  console.log(`Is ${searchWord} word present? : ${search(root, searchWord)}`);

  let prefixWord = "bo";
  console.log(
    `Is ${prefixWord} word a prefix? : ${isPrefix(root, prefixWord)}`
  );

  const deleteWord = "apples";
  let found: boolean;
  ({ root, found } = deletion(root, deleteWord));
  console.log(`Is ${deleteWord} word deleted? : ${found}`);

  prefixWord = "apple";
  console.log(
    `Is ${prefixWord} word a prefix? : ${isPrefix(root, prefixWord)}`
  );
}

main();
