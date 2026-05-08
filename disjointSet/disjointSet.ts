type disjointSetType = {
  ranks: number[];
  parents: number[];
};

export const findUltimateParent = (
  ds: disjointSetType,
  node: number,
): number => {
  const noOfNodes = ds.parents.length;

  if (node < 1 || node > noOfNodes) {
    return -1;
  }

  return ds.parents[node] ? ds.parents[node] : -1;
};

export function unionByRank(ds: disjointSetType, node1: number, node2: number) {
  if (findUltimateParent(ds, node1) === findUltimateParent(ds, node2)) {
    return false;
  }

  const node1Rank = ds.ranks[node1];
  const node2Rank = ds.ranks[node2];

  const node1Parent = ds.parents[node1];
  const node2Parent = ds.parents[node2];

  // if (node2 === 3) console.log("new", node1Rank, node2Rank);

  if (node1Rank !== undefined && node2Rank !== undefined) {
    if (
      node1Parent === node1 &&
      node2Parent === node2 &&
      node1Rank === node2Rank
    ) {
      ds.parents[node2] = node1;
      ds.ranks[node1] = node1Rank + 1;
    } else if (node1Parent !== node1) {
      let ultimateNode1Parent = node1Parent;

      while (
        ultimateNode1Parent !== undefined &&
        ds.parents[ultimateNode1Parent] !== ultimateNode1Parent
      ) {
        ultimateNode1Parent = ds.parents[ultimateNode1Parent];
      }

      if (node1 === 5 && node2 === 6)
        console.log(`####### ultimateNode1Parent: ${ultimateNode1Parent}`);

      let ultimateNode2Parent = node2Parent;

      while (
        ultimateNode2Parent !== undefined &&
        ds.parents[ultimateNode2Parent] !== ultimateNode2Parent
      ) {
        ultimateNode2Parent = ds.parents[ultimateNode2Parent];
      }

      if (node1 === 5 && node2 === 6)
        console.log(`####### ultimateNode2Parent: ${ultimateNode2Parent}`);

      if (
        ultimateNode1Parent !== undefined &&
        ultimateNode2Parent !== undefined
      ) {
        const rank1 = ds.ranks[ultimateNode1Parent];
        const rank2 = ds.ranks[ultimateNode2Parent];

        if (rank1 !== undefined && rank2 !== undefined) {
          if (rank1 === rank2) {
            if (node1 === 5 && node2 === 6) console.log("inside equal");
            ds.parents[ultimateNode2Parent] = ultimateNode1Parent;
            ds.ranks[ultimateNode1Parent] = rank1 + 1;
            if (node1 === 5 && node2 === 6) {
              console.log("inside1");
              console.log(ds.parents[ultimateNode2Parent]);
              console.log(ds.ranks[ultimateNode1Parent]);
              console.log("inside2");
            }
          } else if (rank1 > rank2) {
            ds.parents[ultimateNode2Parent] = ultimateNode1Parent;
          } else {
            ds.parents[ultimateNode2Parent] = ultimateNode2Parent;
          }
        }
      }
    }
  }

  return true;
}

export function disjointSet(size: number): disjointSetType {
  const ranks: number[] = Array(size + 1).fill(0);
  const parents: number[] = Array.from(
    { length: size + 1 },
    (v, index) => index,
  );

  return {
    ranks,
    parents,
  };
}

function main() {
  const ds = disjointSet(7);
}

// main();
