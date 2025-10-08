<script>
    import BeerStyleContent from "../../../components/beer-style/BeerStyleContent.svelte";
    import beerStyles from "../../../constants/beer-styles.js";
</script>


<BeerStyleContent beerStyle={beerStyles.find((s) => s.id === "pilsner")} />