<script>
  import breweries from "../../constants/breweries";
  import Title from "../../shared/Title.svelte";
</script>
<div class="flex flex-col gap-5">
    <Title main="Breweries" subtitle="From the most famous until the small ones"/>
    <div>
        
        {#each breweries as brewery}
            {brewery.name}
        {/each}
    </div>
</div>