function node(value) {
  return {
    value: value,
    prev: null,
    next: null,
  };
}

function insertAtStart(head, tail, value) {
  if (head === null) {
    head = node(value);
    return { head, tail: head };
  }

  const newNode = node(value);
  newNode.next = head;
  head.prev = newNode;
  head = newNode;

  return { head, tail };
}

function insertAtEnd(head, tail, value) {
  if (head === null) {
    head = node(value);
    return { head, tail: head };
  }

  const newNode = node(value);
  newNode.prev = tail;
  tail.next = newNode;
  tail = newNode;

  return { head, tail };
}

function insertAfterSpecificNode(head, tail, existingValue, newValue) {
  if (head === null) {
    console.log("Doubly Linked list empty");
    return { head, tail };
  }

  if (tail.value === existingValue) {
    return insertAtEnd(head, tail, newValue);
  }

  let currentNode = head;

  do {
    if (currentNode.value === existingValue) {
      const newNode = node(newValue);
      newNode.prev = currentNode;
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      currentNode.next.prev = newNode;
      return { head, tail };
    }
    currentNode = currentNode.next;
  } while (currentNode !== null);

  console.log(`\n${existingValue} not found`);
  return { head, tail };
}

function removeAtStart(head, tail) {
  if (head === null) {
    console.log("Doubly Linked list empty");
    return { head: null, tail: null };
  }

  if (head.next === null) {
    return { head: null, tail: null };
  }

  head = head.next;
  head.prev = null;

  return { head, tail };
}

function removeAtEnd(head, tail) {
  if (tail === null) {
    console.log("Doubly Linked list empty");
    return { head: null, tail: null };
  }

  if (tail.prev === null) {
    return { head: null, tail: null };
  }

  tail = tail.prev;
  tail.next = null;

  return { head: head, tail: tail };
}

function removeByNodeValue(head, tail, value) {
  if (head === null) {
    console.log("Doubly Linked list empty");
    return { head: null, tail: null };
  }

  if (head.value === value) {
    return removeAtStart(head, tail);
  }

  if (tail.value === value) {
    return removeAtEnd(head, tail);
  }

  let currentNode = head;

  do {
    if (currentNode.value === value) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      return { head, tail };
    }
    currentNode = currentNode.next;
  } while (currentNode !== null);

  console.log(`\n${value} not found`);
  return { head, tail };
}

function search(head, value) {
  if (head === null) {
    console.log("Doubly Linked list: [ ]");
    return false;
  }

  do {
    if (head.value === value) {
      return true;
    }
    head = head.next;
  } while (head !== null);

  return false;
}

function display(head) {
  if (head === null) {
    console.log("Doubly Linked list: [ ]");
    return;
  }

  let current = head;
  let result = "";

  while (current !== null) {
    result += current.value + " <-> ";
    current = current.next;
  }
  console.log("Doubly Linked list:", result + "null");
}

function displayReverse(tail) {
  if (tail === null) {
    console.log("Doubly Linked list: [ ]");
    return;
  }

  let current = tail;
  let result = "";

  while (current !== null) {
    result += current.value + " <-> ";
    current = current.prev;
  }
  console.log("Doubly Linked list:", result + "null");
}

function main() {
  // let storage = {
  //   head: null,
  //   tail: null,
  // };

  // storage = insertAtStart(storage.head, storage.tail, 32);
  // storage = insertAtStart(storage.head, storage.tail, 91);
  // storage = insertAtStart(storage.head, storage.tail, 12);
  // storage = insertAtStart(storage.head, storage.tail, 45);
  // storage = insertAtStart(storage.head, storage.tail, 37);

  // storage = insertAtEnd(storage.head, storage.tail, 32);
  // storage = insertAtEnd(storage.head, storage.tail, 91);
  // storage = insertAtEnd(storage.head, storage.tail, 12);
  // storage = insertAtEnd(storage.head, storage.tail, 45);
  // storage = insertAtEnd(storage.head, storage.tail, 37);

  // storage = insertAfterSpecificNode(storage.head, storage.tail, 32, 91);
  // storage = insertAfterSpecificNode(storage.head, storage.tail, 91, 12);
  // storage = insertAfterSpecificNode(storage.head, storage.tail, 12, 45);
  // storage = insertAfterSpecificNode(storage.head, storage.tail, 45, 37);

  // display(storage.head);
  // storage = removeAtStart(storage.head);
  // display(storage.head);
  // storage = removeAtStart(storage.head);
  // display(storage.head);
  // storage = removeAtStart(storage.head);
  // display(storage.head);
  // storage = removeAtStart(storage.head);
  // display(storage.head);
  // storage = removeAtStart(storage.head);
  // display(storage.head);
  // storage = removeAtStart(storage.head);
  // display(storage.head);

  // displayReverse(storage.tail)

  // display(storage.head);
  // storage = removeAtEnd(storage.head, storage.tail);
  // display(storage.head);
  // storage = removeAtEnd(storage.head, storage.tail);
  // display(storage.head);
  // storage = removeAtEnd(storage.head, storage.tail);
  // display(storage.head);
  // storage = removeAtEnd(storage.head, storage.tail);
  // display(storage.head);
  // storage = removeAtEnd(storage.head, storage.tail);
  // display(storage.head);

  // display(storage.head);
  // storage = removeByNodeValue(storage.head, storage.tail, 12);
  // display(storage.head);
  // storage = removeByNodeValue(storage.head, storage.tail, 45);
  // display(storage.head);
  // storage = removeByNodeValue(storage.head, storage.tail, 32);
  // display(storage.head);
  // storage = removeByNodeValue(storage.head, storage.tail, 91);
  // display(storage.head);
  // storage = removeByNodeValue(storage.head, storage.tail, 37);
  // display(storage.head);

  
  // display(storage.head);
  // const searchingValue = 12;
  // console.log(
  //   `Search ${searchingValue}: `,
  //   search(storage.head, searchingValue) ? "Found" : "Not found"
  // );
}

main();
