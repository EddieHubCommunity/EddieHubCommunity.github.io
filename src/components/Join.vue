<template>
  <div
    class="flex flex-col items-center bg-white lg:rounded m-12 py-8 px-4 lg:px-16 lg:max-w-4xl"
  >
    <h2 class="text-center text-4xl py-5 font-semibold">
      How to join our
      <span class="text-teal-600 border-b-2 border-teal-600">community</span>?
    </h2>
    <p class="text-center text-xl leading-tight">
      Raise an issue on the support repo asking to join (<a
        class="text-blue-500 underline"
        target="_blank"
        href="https://github.com/EddieJaoudeCommunity/support/issues?q=is%3Aissue+is%3Aclosed+label%3A%22invite+me+to+the+organisation%22"
        >examples</a
      >).
    </p>
    <a
      class="mt-5 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
      style="transition: all 0.15s ease"
      target="_blank"
      href="https://github.com/EddieJaoudeCommunity/support/issues"
    >
      Join us.
    </a>
  </div>
</template>

<script>
export default {
  name: "Join"
};
</script>

<style></style>
