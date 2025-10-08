<script lang="ts">
  import { marked } from "marked";

    export let beerStyle: any = null;
</script>

{#if beerStyle}

<div class="flex flex-col gap-5">
    {#if beerStyle.image}
        <img src={beerStyle.image} alt="{beerStyle.name}" class="h-96 object-cover rounded-md" />
    {/if}
    <h1 class="text-5xl font-bold text-yellow-400 mb-6">{beerStyle.name}</h1>
    <article class="prose lg:prose-xl prose-invert">
        
        {@html marked.parse(beerStyle.description)}
    </article>
</div>
{/if}

<!-- 
<p>ID: {beerStyle.id}</p>
<p>Origin: {beerStyle.origin}</p>
<a class="bg-yellow-400 p-3 mt-12" href="/">Back Home</a>
-->