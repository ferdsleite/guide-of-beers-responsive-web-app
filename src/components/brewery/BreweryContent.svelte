<script lang="ts">
  import BeerItem from "./BeerItem.svelte";

  export let brewery: any = null;
</script>

{#if brewery}
  <div class="flex flex-col gap-5">
    <h1 class="text-5xl font-bold text-yellow-400 mb-6">{brewery.name}</h1>
    <p class="text-sm text-zinc-400 -mt-8">{brewery.country}</p>
    <img
      src={brewery.image}
      alt={brewery.name}
      class="h-96 object-cover rounded-md"
    />
    <p class="text-zinc-400 text-sm md:text-md text-justify">
      {brewery.description}
    </p>
    <h2 class="text-2xl font-bold text-zinc-300">List of Beers</h2>
    <grid class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {#each brewery.beers as beer}
        <BeerItem {beer} />
      {/each}
    </grid>
  </div>
{/if}
