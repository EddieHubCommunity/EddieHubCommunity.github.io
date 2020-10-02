<template>
  <div
    class="min-w-screen min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5"
  >
    <!-- HEADER -->
    <div class="flex flex-col items-center justify-center px-5 py-5">
      <img
        class="w-1/2"
        src="./assets/img/hero.svg"
        alt="colllaboration sketch"
      />
      <h3
        class="text-3xl font-semibold text-indigo-100 leading-tight relative z-10"
      >
        We believe Open Source is for everyone, yes you!
      </h3>
      <h2
        class="text-xl font-semibold text-indigo-100 leading-tight relative z-10"
      >
        OPEN SOURCE is NOT about code, it is about people and collaboration
      </h2>

      <div
        class="flex flex-col items-center bg-white lg:rounded m-12 py-8 px-4 lg:px-16 lg:max-w-4xl"
      >
        <h2 class="text-4xl mb-8 font-semibold">
          Our
          <span class="text-teal-600 border-b-2 border-teal-600">Mission</span>
        </h2>
        <p class="text-center text-xl leading-tight">
          We are invested in getting you those green squares 🟩 on GitHub!
          Contributing to Open Source Software (OSS) is a great way for you to
          learn, work with different people and also network.
        </p>
      </div>
    </div>

    <!-- CARDS >> PROJECTS -->
    <Projects />
    <!-- How to Join -->
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
    <!-- MODERATORS -->
    <Moderators />
    <!-- FOOTER -->
    <div class="mt-6">
      <a
        href="https://youtube.com/eddiejaoude?sub_confirmation=1"
        class="inline-block text-sm m-2 px-4 py-2 leading-none border rounded border-white text-white hover:border-transparent hover:text-teal-500 hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <i class="fab fa-youtube-square"></i>
        YouTube</a
      >
      <a
        href="http://github.com/EddieJaoudeCommunity"
        class="inline-block text-sm m-2 px-4 py-2 leading-none border rounded border-white text-white hover:border-transparent hover:text-teal-500 hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <i class="fab fa-github-square"></i>
        GitHub</a
      >
      <a
        href="https://discord.com/invite/jZQs6Wu"
        class="inline-block text-sm m-2 px-4 py-2 leading-none border rounded border-white text-white hover:border-transparent hover:text-teal-500 hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        <i class="fab fa-discord"></i>
        Discord</a
      >
    </div>
  </div>
</template>

<script>
import Moderators from "./components/Moderators";
import Projects from "./components/Projects";

export default {
  name: "App",
  components: {
    Moderators,
    Projects
  }
};
</script>

<style></style>
