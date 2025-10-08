<script>
  import { page } from "$app/state";
  import BreweryContent from "../../../components/brewery/BreweryContent.svelte";
</script>

    <BreweryContent brewery={page.data.brewery} />
