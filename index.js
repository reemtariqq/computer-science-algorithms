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
g.addEdge("B", "A");
g.addEdge("B", "C");
g.addEdge("B", "D");
g.addEdge("C", "A");
g.addEdge("C", "B");
g.addEdge("C", "E");
g.addEdge("C", "D");
g.addEdge("D", "A");
g.addEdge("D", "B");
g.addEdge("D", "C");
g.addEdge("D", "F");
g.addEdge("F", "D");
g.addEdge("F", "G");
g.addEdge("E", "C");
g.addEdge("G", "F");



console.log(g.dfs("A", "E", [], null, true));
