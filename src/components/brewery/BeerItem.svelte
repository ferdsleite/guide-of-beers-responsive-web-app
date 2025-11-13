<script lang="ts">
    export let beer: any = null;
    import { IconBeer } from "@tabler/icons-svelte";
</script>

{#if beer }
    <a href={beer.link} target="_blank" class="flex flex-col rounded-md overflow-hidden bg-zinc-900 p-2 hover:bg-zinc-800 transition-colors">
        <img src={beer.image} alt={beer.name} class="h-56 w-full object-scale-down">
        <div class="flex-1 flex flex-col p-4 gap-3">
            <span class="flex-1 text-center font-medium">{beer.name}</span>
            <button class="btn yellow">
                <IconBeer size={18}/>
                <span>beer link</span>
            </button>
        </div>
    </a>
    
{/if}