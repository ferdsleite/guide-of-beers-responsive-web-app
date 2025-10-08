<script>
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";

</script>
<aside class="flex flex-col self-start gap-10 w-72 p-5 border border-zinc-800 rounded-md">
    <Menu title="Browse">
        <MenuItem href="/" text="Home"/>
        <MenuItem href="/" text="Breweries"/>
        <MenuItem href="/beer-styles" text="Beer Styles"/>
        <MenuItem href="/" text="Beers"/>
    </Menu>
    <Menu title="Main Beer Styles">
        <MenuItem href="/beer-styles/ipa" text="IPA"/>
        <MenuItem href="/beer-styles" text="APA"/>
        <MenuItem href="/beer-styles" text="Pilsen"/>
        <MenuItem href="/beer-styles" text="Pilsen"/>
        
    </Menu>
    <Menu title="Main Beers">
        <MenuItem href="/" text="Beer #1"/>
        <MenuItem href="/" text="Beer #2"/>
        <MenuItem href="/" text="Beer #3"/>
        <MenuItem href="/" text="Beer #4"/>
    </Menu>
    <Menu title="Follow us">
        <MenuItem href="/" text="Last News"/>
        <MenuItem href="/" text="Instagram"/>
        <MenuItem href="/" text="Facebook"/>
        <MenuItem href="/" text="Youtube"/>
    </Menu>

</aside>