<script lang="ts">
    export let brewery: any = null;
</script>

{#if brewery}
    <div>
        <a href="/breweries/{brewery.id}" class="flex flex-col gap-4 rounded-md relative overflow-hidden border border-zinc-800">
            <img src={brewery.image} alt={brewery.name} class="h-60 object-cover">
            <div class="absolute bottom-0 text-yellow-300 text-bold font-medium flex px-4 py-2 bg-black/60 w-full ">

                <span>{brewery.name}</span>
            </div>
        </a>
    </div>
{/if}