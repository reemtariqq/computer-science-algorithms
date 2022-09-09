import { Graph } from "./Graph.js";

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("C", "E");
g.addEdge("D", "F");
g.addEdge("F", "G");

g.bfs("A", "D");
