<script lang="ts">
  export let brewery: any = null;
</script>

{#if brewery}
  <a
    href="/breweries/{brewery.id}"
    class="flex flex-col gap-4 rounded-md overflow-hidden border border-zinc-800"
  >
    <img
      src={brewery.image}
      alt={brewery.name}
      class="h-48 md:h-96 w-full object-cover"
    />
    <div class="flex flex-col gap-2 p-5">
      <span class="text-2xl font-black">{brewery.name}</span>
      <span class="text-sm md:text-md text-zinc-400 text-justify"
        >{brewery.description}</span
      >
      <button class="btn gray self-end">Read More</button>
    </div>
  </a>
{/if}
