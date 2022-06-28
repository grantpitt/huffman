<script lang="ts">
  import Node from "./lib/Node.svelte";
  import { getHuffmanTree } from "./utils/huffman";

  let source = "For my part I know nothing with any certainty, but the sight of the stars makes me dream. -Vincent van Gogh";

  $: tree = getHuffmanTree(source);
</script>


<textarea name="" id="" rows="8" bind:value={source}></textarea>
<section>
  <Node node={tree} />
</section>

<style>
  textarea {
    width: 100%;
    max-width: 500px;
  }
  section {
    font-size: 20px;
  }
  section, textarea {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
  }
</style>
