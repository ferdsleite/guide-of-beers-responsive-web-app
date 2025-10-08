<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
    import Page from '../components/template/Page.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Page>
	{@render children?.()}
</Page>




