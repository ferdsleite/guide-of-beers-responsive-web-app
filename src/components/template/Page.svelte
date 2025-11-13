<script>
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
    <Header />

    <div class="flex-1 flex flex-col md:flex-row mx-auto w-full max-w-7xl p-5 md:p-6">

        <main class="flex-1 pr-4 pb-4">
            <slot></slot>
        </main>
        <Sidebar />
    </div>
    <Footer />
</div>