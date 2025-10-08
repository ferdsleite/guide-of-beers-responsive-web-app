<script lang="ts">
  import { marked } from "marked";
    export let brewery: any = null;
</script>

{#if brewery}

<div class="flex flex-col gap-5">
    {#if brewery.image}
        <img src={brewery.image} alt="{brewery.name}" class="h-96 object-cover rounded-md" />
    {/if}
    <h1 class="text-5xl font-bold text-yellow-400 mb-6">{brewery.name}</h1>
    <article class="prose lg:prose-xl prose-invert">
        
        {@html marked.parse(brewery.description)}
    </article>
    <div>
        {brewery.beers}
    </div>
</div>
{/if}
