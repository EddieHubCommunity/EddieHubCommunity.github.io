<template>
  <div id="projects">
    <h2 class="text-center text-3xl font-semibold text-indigo-100">
      Our Projects
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <!-- CARD ITEM -->
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
    </div>
    <!-- END CART ITEM -->
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style></style>
