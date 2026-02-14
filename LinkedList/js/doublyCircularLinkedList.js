function node(value) {
  return {
    value: value,
    prev: null,
    next: null,
  };
}

function insertAtStart(head, value) {
  if (head === null) {
    head = node(value);
    head.next = head;
    head.prev = head;
    return head;
  }

  const newNode = node(value);
  newNode.next = head;
  newNode.prev = head.prev;
  head.prev.next = newNode;
  head.prev = newNode;
  head = newNode;

  return head;
}

function insertAtEnd(head, value) {
  if (head === null) {
    head = node(value);
    head.next = head;
    head.prev = head;
    return head;
  }

  const newNode = node(value);
  newNode.prev = head.prev;
  newNode.next = head;
  head.prev.next = newNode;
  head.prev = newNode;

  return head;
}

function insertAfterSpecificNode(head, existingValue, newValue) {
  if (head === null) {
    console.log('Doubly Linked list empty')
    return null;
  }

  let currentNode = head;

  do {
    if (currentNode.value === existingValue) {
      const newNode = node(newValue);
      newNode.prev = currentNode;
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      currentNode.next.prev = newNode;
      return head;
    }
    currentNode = currentNode.next;
  } while (currentNode !== head);

  console.log(`\n${existingValue} not found`)
  return head;
}

function removeAtStart(head) {
  if (head === null) {
    console.log('Doubly Linked list empty')
    return null;
  }

  if (head.next === head) {
    head = null;
    return head;
  }

  head.prev.next = head.next;
  head.next.prev = head.prev;
  head = head.next;

  return head;
}

function removeAtEnd(head) {
  if (head === null) {
    console.log('Doubly Linked list empty')
    return null;
  }

  if (head.next === head) {
    head = null;
    return head;
  }

  head.prev.prev.next = head;
  head.prev = head.prev.prev;

  return head;
}

function removeByNodeValue(head, value) {
  if (head === null) {
    console.log('Doubly Linked list empty')
    return null;
  }

  if (head.prev.value === value) {
    return removeAtEnd(head);
  }

  if (head.value === value) {
    return removeAtStart(head);
  }

  let currentNode = head.next;

  do {
    if (currentNode.value === value) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      return head;
    }
    currentNode = currentNode.next;
  } while (currentNode !== head);

  console.log(`\n${value} not found`)
  return head;
}

function search(head, value) {
  if (head === null) {
    console.log('Doubly Linked list: [ ]')
    return false;
  }

  let currentNode = head;

  do {
    if (currentNode.value === value) {
      return true;
    }
    currentNode = currentNode.next;
  } while (currentNode !== head);

  return false;
}

function display(head) {
  if (head === null) {
    console.log('Doubly Linked list: [ ]')
    return;
  }

  let currentNode = head;
  process.stdout.write(`\nDoubly Linked list: [ `);

  do {
    process.stdout.write(`${currentNode.value}, `);
    currentNode = currentNode.next;
  } while (currentNode !== head);

  process.stdout.write(`]\n`);
}

function displayReverse(head) {
  if (head === null) {
    console.log('Doubly Linked list: [ ]')
    return;
  }

  let currentNode = head.prev;
  process.stdout.write(`\nDoubly Linked list reverse order: [ `);

  do {
    process.stdout.write(`${currentNode.value}, `);
    currentNode = currentNode.prev;
  } while (currentNode !== head.prev);

  process.stdout.write(`]\n`);
}

function main() {
  // let head = null;

  // head = insertAtStart(head, 32)
  // head = insertAtStart(head, 91)
  // head = insertAtStart(head, 12)
  // head = insertAtStart(head, 45)
  // head = insertAtStart(head, 37)
  // display(head)

  // head = insertAtEnd(head, 32)
  // head = insertAtEnd(head, 91)
  // head = insertAtEnd(head, 12)
  // head = insertAtEnd(head, 45)
  // head = insertAtEnd(head, 37)
  // display(head)

  // head = insertAfterSpecificNode(head, 32, 91)
  // head = insertAfterSpecificNode(head, 91, 12)
  // head = insertAfterSpecificNode(head, 12, 45)
  // head = insertAfterSpecificNode(head, 45, 37)
  // display(head)

  // display(head)
  // head = removeAtStart(head);
  // display(head)
  // head = removeAtStart(head);
  // display(head)
  // head = removeAtStart(head);
  // display(head)
  // head = removeAtStart(head);
  // display(head)
  // head = removeAtStart(head);
  // display(head)
  // head = removeAtStart(head);
  // display(head)

  // displayReverse(head)

  // display(head)
  // head = removeAtEnd(head);
  // display(head)
  // head = removeAtEnd(head);
  // display(head)
  // head = removeAtEnd(head);
  // display(head)
  // head = removeAtEnd(head);
  // display(head)
  // head = removeAtEnd(head);
  // display(head)
  // head = removeAtEnd(head);
  // display(head)

  // display(head)
  // head = removeByNodeValue(head, 32)
  // display(head)
  // head = removeByNodeValue(head, 91)
  // display(head)
  // head = removeByNodeValue(head, 12)
  // display(head)

  // display(head)
  // const searchingValue = 12;
  // console.log(`Search ${searchingValue}: `, (search(head, searchingValue)) ? "Found" : "Not found")
}

main()