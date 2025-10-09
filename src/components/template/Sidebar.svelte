<script>
  import { IconBeer, IconBeerFilled, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconBuildingCastle, IconHome, IconNews } from "@tabler/icons-svelte";
import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";

</script>
<aside class="flex flex-col self-start gap-10 w-72 p-5 border border-zinc-800 rounded-md">
    <Menu title="Browse">
        <MenuItem href="/" text="Home">
            <IconHome />
        </MenuItem>

        <MenuItem href="/breweries" text="Breweries">
            <IconBuildingCastle />
        </MenuItem> 

        <MenuItem href="/beer-styles" text="Beer Styles"> 
            <IconBeer />
        </MenuItem>

        <MenuItem href="/" text="Beers">
            <IconBeerFilled />
        </MenuItem>

    </Menu>
    <Menu title="Popular Beer Styles">
        <MenuItem href="/beer-styles/ipa" text="IPA"/>
        <MenuItem href="/beer-styles/pilsner" text="Pilsner"/>
        <MenuItem href="/beer-styles/stout" text="Stout"/>
        <MenuItem href="/beer-styles/weissbier" text="Weissbier"/>
        
    </Menu>
    <Menu title="Highlighted Breweries">
        <MenuItem href="/breweries/guinness" text="Guinness"/>
        <MenuItem href="/breweries/brewdog" text="Brewdog"/>
        <MenuItem href="/breweries/birra-laru" text="Birra Laru"/>
        <MenuItem href="/breweries/lzo" text="LZO"/>
    </Menu>
    <Menu title="Follow us">
        <MenuItem href="/" text="Last News">
            <IconNews />
        </MenuItem>
        <MenuItem href="/" text="Instagram">
            <IconBrandInstagram />
        </MenuItem>
        <MenuItem href="/" text="Facebook">
            <IconBrandFacebook />
        </MenuItem>
        <MenuItem href="/" text="Youtube">
            <IconBrandYoutube />
        </MenuItem>
    </Menu>

</aside>