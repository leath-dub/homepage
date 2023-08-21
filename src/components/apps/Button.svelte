<script>
  import Icon from "./Icon.svelte";

  export let site;
  export let size;
</script>

<a href={`https://${site}`}>
  <Icon {site} {size} />
</a>

<style>
  a {
    text-decoration: none !important;
    display: inline-flex;
    border-radius: 25%;
    padding: 0.5rem;
    background-color: var(--text);
  }
</style>
