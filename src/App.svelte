<script>
    import Discord from "./components/apps/Discord.svelte";
    import RosePine from "./components/themes/RosePine.svelte";
</script>

<!-- This is just a theme ! -->
<RosePine />

<Discord/>

<style>
  :global(body) {
    background-color: var(--base);
  }
</style>
