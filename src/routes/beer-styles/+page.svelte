<script>
  import BeerStyleItem from "../../components/beer-style/BeerStyleItem.svelte";
  import beerStyles from "../../constants/beer-styles";
  import Title from "../../shared/Title.svelte";
</script>
<div class="flex flex-col gap-5">
    <Title main="Beer Styles" subtitle="Beers of different styles from all around the world" />
    
    <div class="grid lg:grid-cols-4 gap-3 sm:grid-cols-1">
    
        {#each beerStyles as beerStyle}
            <BeerStyleItem {beerStyle} />
        {/each}
    </div>
</div>