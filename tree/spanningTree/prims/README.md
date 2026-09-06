# Prims Algorithm

- Introduction to Algorithms book
- [docs 1](https://en.wikipedia.org/wiki/Prim%27s_algorithm)
- [docs 2](https://intellipaat.com/blog/prims-algorithm/)
- [Video](https://youtu.be/mJcZjjKzeqk)

#### Steps Implementation

[link](https://excalidraw.com/#json=56DN7r-pYvmcQkxpNZDPj,i2msgoCtYUva9L0CxhBPbw)

![prims algo](./prims.svg)

#### Advantages

- Optimal Solution: Prim’s algorithm guarantees the generation of a minimum spanning tree, ensuring that the total weight or cost of the tree is minimized. This is advantageous when efficiency and cost-effectiveness are crucial considerations.
- Efficiency: The algorithm is efficient and runs in O(V^2) time complexity with an adjacency matrix representation, where V is the number of vertices. However, using advanced data structures, like a Fibonacci heap, can reduce the time complexity to O(E + V log V), making it highly practical for large graphs.
- Prim’s algorithm can handle scenarios where the weights represent distances, costs, or any other relevant metric.


#### Disadvantages

- Prim's algorithm can be slow on dense graphs
- Prim's algorithm relies on a priority queue, which can take up extra memory and slow down the algorithm on very large graphs.
- The choice of starting node can affect the MST output, which may not be desirable in some applications.

#### Time Complexity

With Priority Queue/Min-Heap: O(E log V)

- E is the number of edges.
- V is the number of vertices.

#### Space Complexity

Using Priority Queue/Min-Heap: O(V + E)

- E is the number of edges.
- V is the number of vertices.
