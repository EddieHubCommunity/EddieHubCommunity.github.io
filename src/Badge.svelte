<script>
  import { badges } from "./data";
  export let type;
  const { title, classes } = badges[type];
</script>

<button class="rounded px-1 mr-1 text-sm ml-auto {classes}">{title}</button>
