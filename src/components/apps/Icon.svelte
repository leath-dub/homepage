<script>
  export let site;
  export let size = 64;

  // Website to get the favicon from website
  let src = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${site}&size=${size}`;
</script>

<img {src} alt="Icon" />
