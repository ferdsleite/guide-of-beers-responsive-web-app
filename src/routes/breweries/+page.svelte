<script>
  import BreweryItem from "../../components/brewery/BreweryItem.svelte";
  import breweries from "../../constants/breweries";
  import Title from "../../shared/Title.svelte";
</script>

<div class="flex flex-col gap-5">
    <Title main="Breweries" subtitle="From the most famous until the small ones"/>
    <div class="grid grid-cols-1 gap-5 md:grid md:grid-cols-2">
        
      {#each breweries as brewery}
          <BreweryItem {brewery} />
      {/each}
    </div>
</div>