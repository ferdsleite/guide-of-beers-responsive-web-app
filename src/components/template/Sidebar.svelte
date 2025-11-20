<script>
  import {
    IconBeer,
    IconBeerFilled,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
    IconBuildingCastle,
    IconHome,
    IconMenu2,
    IconNews,
    IconX,
  } from "@tabler/icons-svelte";
  import Menu from "./Menu.svelte";
  import MenuItem from "./MenuItem.svelte";

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }
  function close() {
    isOpen = false;
  }
</script>

<!-- Desktop Sidebar -->
<aside
  class="hidden md:flex flex-col self-start gap-10 w-72 p-5 border border-zinc-800 rounded-md"
>
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
    <MenuItem href="/beer-styles/ipa" text="IPA" />
    <MenuItem href="/beer-styles/pilsner" text="Pilsner" />
    <MenuItem href="/beer-styles/stout" text="Stout" />
    <MenuItem href="/beer-styles/weissbier" text="Weissbier" />
  </Menu>
  <Menu title="Highlighted Breweries">
    <MenuItem href="/breweries/guinness" text="Guinness" />
    <MenuItem href="/breweries/brewdog" text="Brewdog" />
    <MenuItem href="/breweries/birra-laru" text="Birra Laru" />
    <MenuItem href="/breweries/lzo" text="LZO" />
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

<!-- Tablet and Mobile Menu Icon -->
<div class="flex md:hidden justify-end items-center mb-6">
  <button
    type="button"
    class="text-zinc-200 bg-zinc-900 p-1.5 rounded-md"
    aria-expanded={isOpen}
    aria-controls="mobile-sidebar"
    on:click={toggle}
  >
    {#if !isOpen}
      <IconMenu2 size={26} />
    {:else}
      <IconX size={26} />
    {/if}
  </button>
</div>

<!-- Mobile Menu Drawer -->
{#if isOpen}
  <div class="fixed inset-0 z-50 flex justify-end" role="presentation">
    <!-- Bg overlay closes on click -->
    <button
      type="button"
      class="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm cursor-default"
      aria-label="Close menu"
      on:click={close}
    ></button>

    <!-- Sidebar drawer -->
    <div
      id="mobile-sidebar"
      class="relative w-64 h-full bg-zinc-900 border-l border-zinc-800 p-5 flex flex-col gap-8"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      tabindex="-1"
      on:click|stopPropagation
      on:keydown|stopPropagation
    >
      <div class="flex justify-end">
        <button
          type="button"
          class="text-zinc-200"
          aria-label="Close menu"
          on:click={close}
        >
          <IconX />
        </button>
      </div>
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
        <MenuItem href="/beer-styles/ipa" text="IPA" />
        <MenuItem href="/beer-styles/pilsner" text="Pilsner" />
        <MenuItem href="/beer-styles/stout" text="Stout" />
        <MenuItem href="/beer-styles/weissbier" text="Weissbier" />
      </Menu>
      <Menu title="Highlighted Breweries">
        <MenuItem href="/breweries/guinness" text="Guinness" />
        <MenuItem href="/breweries/brewdog" text="Brewdog" />
        <MenuItem href="/breweries/birra-laru" text="Birra Laru" />
        <MenuItem href="/breweries/lzo" text="LZO" />
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
    </div>
  </div>
{/if}
