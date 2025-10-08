<script lang="ts">
    export let beerStyle: any = null;
</script>

{#if beerStyle}
    <div>
        <a href="/beer-styles/{beerStyle.id}" class="flex flex-col gap-4 rounded-md relative overflow-hidden border border-zinc-800">
            <img src={beerStyle.image} alt={beerStyle.name} class="h-60 object-cover">
            <div class="absolute bottom-0 text-yellow-300 text-bold font-medium flex px-4 py-2 bg-black/60 w-full ">

                <span>{beerStyle.name}</span>
            </div>
        </a>
    </div>
{/if}