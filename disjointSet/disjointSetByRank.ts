type disjointSetType = {
  ranks: number[];
  parents: number[];
};

export const disjointSet = (size: number): disjointSetType => {
  const ranks: number[] = Array(size + 1).fill(0);
  const parents: number[] = Array.from(
    { length: size + 1 },
    (v, index) => index,
  );

  return {
    ranks,
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

export const unionByRank = (
  ds: disjointSetType,
  firstNode: number,
  secondNode: number,
) => {
  const ultimateNode1Parent = findUltimateParent(ds, firstNode);
  const ultimateNode2Parent = findUltimateParent(ds, secondNode);

  if (ultimateNode1Parent === ultimateNode2Parent) {
    return;
  }

  const ultimateNode1ParentRank = ds.ranks[firstNode]!;
  const ultimateNode2ParentRank = ds.ranks[firstNode]!;

  if (ultimateNode1ParentRank === ultimateNode2ParentRank) {
    ds.parents[ultimateNode2Parent] = ultimateNode1Parent;
    ds.ranks[ultimateNode1Parent] = ultimateNode1ParentRank + 1;
  } else if (ultimateNode1ParentRank > ultimateNode2ParentRank) {
    ds.parents[ultimateNode2Parent] = ultimateNode1Parent;
  } else {
    ds.parents[ultimateNode1Parent] = ultimateNode2Parent;
  }
};
