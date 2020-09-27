<script>
  export let link = '';
  export let imageSrc = '';
  export let name = '';
  export let description = '';
</script>

<a
  class="bg-blue-700 rounded max-w-sm overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
  href="{link}"
  target="_blank"
>
  <img
    src="{imageSrc}"
    alt="Sample Project"
    class="w-full h-64 object-cover"
  />
  <h3 class="mt-3 ml-3 font-bold text-indigo-100 text-xl mb-2">
    {name}
  </h3>
  <p class="mx-3 text-indigo-100 text-base pb-3">
    {description}
  </p>
</a>
