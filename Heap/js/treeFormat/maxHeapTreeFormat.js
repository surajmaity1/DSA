let lastNode = null;

function createHeapNode(value) {
  return {
    value: value,
    parent: null,
    left: null,
    right: null,
  };
}
 
function createMaxHeap() {
  const heapStorage = {
    size: 0,
    rootNode: null,
    lastNode: null,
  };

  function addNode(value) {
    const node = createHeapNode(value);

    if (lastNode.left === null) {
      lastNode.left = node;
    } else {
      lastNode.right = node;
    }
    node.parent = lastNode;
    lastNode = node;
  }
}

const root = createMaxHeap();
root.addNode()
