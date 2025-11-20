<script>
  import BreweryItem from "../components/brewery/BreweryItem.svelte";
  import breweries from "../constants/breweries";
</script>

<div class="flex flex-col gap-5">
  {#each breweries as brewery}
    <BreweryItem {brewery} />
  {/each}
</div>
