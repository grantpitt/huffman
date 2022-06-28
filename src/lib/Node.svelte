<script lang="ts">
  import type { Branch, Node } from "../utils/huffman";

  export let node: Node;

  function treeValues(n: Node) {
    // The iterator method gives itself and all children values
    return [...n];
    // let counts = [...node].map((el) => {
    //   if (el === undefined) {
    //     return 33;
    //   }
    //   return 63;
    // })
    // const sum = counts.reduce((a, b) => a + b, 0);
    // return sum;
  }

  function treeHeight(values: string[]) {
    const sum = values.reduce((prev, cur) => (cur !== undefined ? 63 : 33) + prev, 0);
  }

  function branchTransform(n: Branch) {
    const zeroValues = treeValues(n.zero);
    const oneValues = treeValues(n.one);

  }



  // $: zeroCount = "one" in node ? treeValues(node.zero) : 0;
  let zeroCount = 0;
</script>

<kbd class={"value" in node ? "leaf" : "branch"} style:--zeroCount={zeroCount}>
  {"value" in node ? `--- "${node.value}"` : "---"}
</kbd>

{#if "zero" in node}
  <ul style:--zeroCount={zeroCount}>
    <li>
      <svelte:self node={node.zero} />
    </li>
    <li>
      <svelte:self node={node.one} />
    </li>
  </ul>
{/if}

<style>
  kbd {
    display: block;
    /* padding: 0 0 0 0.25em; */
    /* margin: 1em 0; */
    font-family: monospace;
    /* transform: translateX(50%); */
  }

  .leaf {
    /* color: #00f; */
    padding: 1em 0;
  }

  .branch {
    padding-top: 1em;
    /* transform: translateY(calc(var(--zeroCount) * 1px)); */
    /* padding: 1em 0; */
    /* visibility: hidden; */
  }

  ul {
    /* padding: 0.2em 0 0 0.5em; */
    /* transform: translateX(-50%); */
    height: fit-content;
    padding: 0;
    /* padding: 0; */
    margin: -0.5em 0 0 1.5em;
    list-style: none;
    /* border-top: 1px solid #eee; */
    border-left: 2px dashed #222;
  }

  li {
    /* display: inline-flex; */
    /* padding: 0.2em 0; */
  }
</style>
