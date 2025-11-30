function node(value) {
  return {
    value: value,
    next: null,
  };
}

function insertEnd(head, value) {
  if (head === null) {
    head = node(value);
    return head;
  }

  let currentNode = head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }

  currentNode.next = node(value);
  return head;
}

function insertAtStart(head, value) {
  if (head === null) {
    head = node(value);
    return head;
  }

  const newNode = node(value);
  newNode.next = head;
  head = newNode;

  return head;
}

function insertAfterSpecificNode(head, existingValue, newValue) {
  if (head === null) {
    console.log('Linked list empty')
    return null;
  }

  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.value === existingValue) {
      const newNode = node(newValue);
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      return head;
    }
    currentNode = currentNode.next;
  }
  console.log(`\n${existingValue} not found`)
  return head;
}

function removeAtStart(head) {
  if (head === null) {
    console.log('Linked list empty');
    return null;
  }

  head = head.next;
  return head;
}

function removeAtEnd(head) {
  if (head === null) {
    console.log('Linked list empty');
    return null;
  }

  if (head.next === null) {
    return null;
  }

  let currentNode = head;

  while (currentNode.next.next !== null) {
    currentNode = currentNode.next;
  }

  currentNode.next = null;
  return head;
}

function removeByNodeValue(head, value) {
  if (head === null) {
    console.log('Linked list empty')
    return null;
  }

  let currentNode = head;
  let previousNode = null;

  while (currentNode !== null) {

    if (currentNode.value === value) {
      if (head.value === value) {
        return head.next;
      }
      previousNode.next = currentNode.next;
      return head
    }

    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  console.log(`\n${value} not found`)
  return head;
}

function search(head, value) {
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.value === value) {
      return true;
    }
    currentNode = currentNode.next;
  }

  return false;
}

function display(head) {
  let currentNode = head;
  process.stdout.write(`\nLinked list: [ `);

  while (currentNode !== null) {
    process.stdout.write(`${currentNode.value}, `);
    currentNode = currentNode.next;
  }
  process.stdout.write(`]\n`);
}

function main() {
  let head = null;

  const i = 1;

  // head = insertEnd(head, i + 1);
  // head = insertEnd(head, i + 23);
  // head = insertEnd(head, i + 29);

  // head = insertAtStart(head, 1)
  // head = insertAtStart(head, 94)
  // head = insertAtStart(head, 4)
  // head = insertAtStart(head, 24)
  // display(head)
  // console.log(search(head, 94))
  // head = insertAfterSpecificNode(head, 24, 56)
  // display(head)
  // head = removeAtEnd(head);
  // console.log()
  // display(head)
  // head = removeAtEnd(head);
  // console.log()
  // display(head)
  // head = removeAtEnd(head);
  // console.log()
  // display(head)
  // head = removeAtEnd(head);
  // console.log()
  // display(head)
  // head = removeAtEnd(head);
  // console.log()
  // display(head)

  // console.log('Before deletion')
  // display(head)

  // head = removeByNodeValue(head, 24)
  // console.log('\nAfter deletion', 24)
  // display(head)
  // head = removeByNodeValue(head, 30)
  // console.log('\nAfter deletion', 30)
  // display(head)
  // head = removeByNodeValue(head, 2)
  // console.log('\nAfter deletion', 2)
  // display(head)
}

main()