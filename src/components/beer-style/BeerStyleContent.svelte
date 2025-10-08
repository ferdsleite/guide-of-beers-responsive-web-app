<script lang="ts">
    export let beerStyle: any = null;
</script>

{#if beerStyle}

<div class="flex flex-col gap-5 pr-4 mb-8">
    {#if beerStyle.image}
        <img src={beerStyle.image} alt="{beerStyle.name}" class="h-96 object-cover rounded-md" />
    {/if}
    <article class="mt-4">
        <h1 class="text-3xl font-bold mb-6">{beerStyle.name}</h1>
        <p>ID: {beerStyle.id}</p>
        <p>Origin: {beerStyle.origin}</p>
        <p>{beerStyle.description}</p>
    </article>
</div>
{/if}
<a class="bg-yellow-400 p-3 mt-12" href="/">Back Home</a>