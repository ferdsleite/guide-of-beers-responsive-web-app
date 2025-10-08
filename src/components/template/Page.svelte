<script>
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Logo from "./Logo.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
    <Header />
    <div class="flex-1 flex mx-auto w-full max-w-7xl p-5">

        <main class="flex-1">
            <slot></slot>
        </main>
        <Sidebar />
    </div>
    <Footer />
</div>