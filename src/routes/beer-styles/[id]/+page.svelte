<script>
    import {page} from "$app/state"
    import BeerStyleContent from "../../../components/beer-style/BeerStyleContent.svelte";
</script>

<BeerStyleContent beerStyle={page.data.beerStyle} />
