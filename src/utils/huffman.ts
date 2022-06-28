export function getHuffmanTree(source: string) {
  const frequencies = getNodeFrequencies(source.split(""));
  const tree = buildTree(frequencies);
  return tree;
}

function getNodeFrequencies(arr: string[]): Node[] {
  const frequencies = arr.reduce(
    (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
    new Map()
  );
  return [...frequencies].map(([key, value]) => ({
    value: key,
    occurrences: value,
    [Symbol.iterator]: function* depthFirst() {
      yield this.value;
    },
  }));
}

// FIXME: combine our two Node interfaces, export type from this file
// FIXME: don't crame everything into node, extend things / make new interfaces

// This all feels sort of not great
interface BaseNode {
  occurrences: number;
  [Symbol.iterator]: () => IterableIterator<string>;
}

export interface Branch extends BaseNode {
  zero: Node;
  one: Node;
}

export interface Leaf extends BaseNode {
  value: string;
}

export type Node = Branch | Leaf;

function buildTree(frequencies: Node[]) {
  let nodes = sortNodesIncreasing([...frequencies]);
  while (nodes.length > 1) {
    const zero = nodes.shift();
    const one = nodes.shift();
    nodes.push({
      occurrences: (zero?.occurrences || 0) + (one?.occurrences || 0),
      zero,
      one,
      [Symbol.iterator]: function* depthFirst() {
        yield this.value;
        yield* this.zero;
        yield* this.one;
      },
    });
    nodes = sortNodesIncreasing([...nodes]);
  }
  return nodes[0];
}

function sortNodesIncreasing(nodes: Node[]) {
  return nodes.sort((a, b) => a.occurrences - b.occurrences);
}
