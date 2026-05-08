type disjointSetType = {
  size: number[];
  parents: number[];
};

export const disjointSet = (length: number): disjointSetType => {
  const size: number[] = Array(length + 1).fill(1);
  const parents: number[] = Array.from(
    { length: length + 1 },
    (v, index) => index,
  );

  return {
    size,
    parents,
  };
};

export const findUltimateParent = (
  ds: disjointSetType,
  node: number,
): number => {
  const parent = ds.parents[node]!;

  if (node === parent) {
    return node;
  }

  return (ds.parents[node] = findUltimateParent(ds, parent));
};

export const unionBySize = (
  ds: disjointSetType,
  firstNode: number,
  secondNode: number,
) => {
  const ultimateNode1Parent = findUltimateParent(ds, firstNode);
  const ultimateNode2Parent = findUltimateParent(ds, secondNode);

  if (ultimateNode1Parent === ultimateNode2Parent) {
    return;
  }

  const ultimateNode1ParentSize = ds.size[ultimateNode1Parent]!;
  const ultimateNode2ParentSize = ds.size[ultimateNode2Parent]!;

  if (ultimateNode1ParentSize >= ultimateNode2ParentSize) {
    ds.parents[ultimateNode2Parent] = ultimateNode1Parent;
    ds.size[ultimateNode1Parent] =
      ultimateNode1ParentSize + ultimateNode2ParentSize;
  } else {
    ds.parents[ultimateNode1Parent] = ultimateNode2Parent;
    ds.size[ultimateNode2Parent] =
      ultimateNode2ParentSize + ultimateNode1ParentSize;
  }
};
