<script>
  import Card from './Card.svelte';
  import HorizontalCard from './HorizontalCard.svelte';
  import Footer from './Footer.svelte';
  import { footerData, moderators, projects } from './data';

</script>

<div
  class="min-w-screen min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5"
>
  <a href="https://github.com/EddieJaoudeCommunity/EddieJaoudeCommunity.github.io/blob/develop/NEWCOMERS.md" target="_blank">
    <img class="w-1/2" src="img/hero.svg" alt="colllaboration sketch" />
  </a>
  <h3
    class="text-3xl font-semibold text-indigo-100 leading-tight relative z-10 archivo"
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

  <div id="projects">
    <h2 class="text-center text-3xl font-semibold text-indigo-100 mb-8 archivo">
      Our Projects
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      {#each projects as cardItem}
        <Card {...cardItem} />
      {/each}
    </div>
  </div>

  <div
    class="flex flex-col items-center bg-white lg:rounded m-12 py-8 px-4 lg:px-16 lg:max-w-4xl"
  >
    <h2 class="text-center text-4xl py-5 font-semibold archivo">
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
      href="https://github.com/EddieJaoudeCommunity/support/issues/new?assignees=eddiejaoude%2C+mikeysan&labels=invite+me+to+the+organization&template=invitation.md&title=Please+invite+me+to+the+GitHub+Community+Organization"
    >
      Join us.
    </a>
  </div>

  <div class="container my-8 p-5 bg-white rounded-lg">
    <h2 class="text-center text-4xl mb-5 py-5 font-semibold archivo">Our Moderators</h2>
    <div
      class="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
      {#each moderators as moderator}
        <HorizontalCard {...moderator} />
      {/each}
    </div>
  </div>

  <div class="mt-6">
    {#each footerData as data}
      <Footer text={data.text} i={data.i} link={data.link}/>
    {/each}
  </div>
</div>
