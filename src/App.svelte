<script lang="ts">
  import Node from "./lib/Node.svelte";
  import { getHuffmanTree } from "./utils/huffman";

  let source = "For my part I know nothing with any certainty, but the sight of the stars makes me dream. -Vincent van Gogh";
  // let source = "eeefe";

  $: tree = getHuffmanTree(source);
  // console.log(getHuffmanTree(source));

  let output = {
    value: "e",
    zero: {
      value: "0"
    },
    one: {
      value: "1"
    },
  }

</script>


<textarea name="" id="" rows="10" bind:value={source}></textarea>
<section>
  <Node node={tree} />
</section>

<style>
  textarea {
    width: 100%;
    max-width: 500px;
  }
  /* section {
    font-size: 20px;
  } */
</style>
