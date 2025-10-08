<script>
   export let text = "";
   export let href = "/";
</script>

<li>
    <a {href} class="flex gap-2 items-center cursor-pointer px-4 py-2 text-zinc-400 hover:text-white hover:bg-white/10">
        <span>{text}</span>
    </a>
</li>