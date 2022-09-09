export class Graph {
  constructor() {
    this.adjacent = {};
    this.vertices = [];
    this.edges = 0;
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjacent[v] = [];
  }

  addEdge(src, dest) {
    this.adjacent[src].push(dest);
    this.adjacent[dest].push(src);
    this.edges++;
  }

  bfs(goal, root = this.vertices[0]) {
    if (goal === root) {
      return true;
    }

    let adj = this.adjacent;
    const queue = [];
    queue.push(root);

    const visited = [];
    visited[root] = true;

    while (queue.length) {
      let v = queue.shift(); //fifo
      //   console.log(v);

      if (v === goal) {
        return true;
      }

      for (let i = 0; i < adj[v].length; i++) {
        if (!visited[adj[v][i]]) {
          visited[adj[v][i]] = true;
          queue.push(adj[v][i]);

        }
      }
    }

    return false;
  }
}
