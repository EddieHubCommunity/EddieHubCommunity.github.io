<script>
    export let text
    export let i 
    export let link
</script>

<a
  href={link}
  class="inline-block text-sm m-2 px-4 py-2 leading-none border rounded border-white text-white hover:border-transparent hover:text-teal-500 hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
>
  <i class={i}></i>
  {text}
</a>
