<script>
  import Card from "./Card.svelte";
  import ModeratorCard from './Moderators.svelte'
  const cardData = [
    {
      name: "EddieBot",
      imageSrc: "https://user-images.githubusercontent.com/624760/91444835-3797dc80-e86d-11ea-8dfa-d7993a4d382d.png",
      description: "Discord bot for Eddie Jaoude's Discord server.",
      link: "https://github.com/EddieJaoudeCommunity/EddieBot",
    },
    {
      name: "LiveStream GitOps Demo",
      imageSrc:"https://user-images.githubusercontent.com/624760/91444606-e687e880-e86c-11ea-9001-522fc212c7c5.png",
      description: "GitOps live stream repo for EddieBot",
      link: "https://github.com/EddieJaoudeCommunity/LiveStream-GitOps-Demo",
    },
    {
      name: "EddieBot Map",
      imageSrc:"https://user-images.githubusercontent.com/624760/91445888-9f9af280-e86e-11ea-8180-9198953bc33d.png",
      description: "Live steaming background with a map and maybe more ...",
      link: "https://github.com/EddieJaoudeCommunity/EddieBotMap",
    },
    {
      name: "Eddie Jaoude Community website",
      imageSrc:"https://user-images.githubusercontent.com/624760/91445058-83e31c80-e86d-11ea-8243-3ca11b384d40.png",
      description: "Information about our community",
      link: "https://github.com/EddieJaoudeCommunity/EddieJaoudeCommunity.github.io",
    },
    {
      name: "Support",
      imageSrc:"https://user-images.githubusercontent.com/624760/91445509-1d123300-e86e-11ea-9648-c5c715355f26.png",
      description: "Community Help & Support and AEA (Ask Everyone Anything)",
      link: "https://github.com/EddieJaoudeCommunity/support",
    },
    {
      name: "EddieBot UI",
      imageSrc:"https://user-images.githubusercontent.com/624760/91444606-e687e880-e86c-11ea-9001-522fc212c7c5.png",
      description: "EddieBotUI is the front end application that shows Eddie Jaoude Discord Community's public stats.",
      link: "https://github.com/EddieJaoudeCommunity/EddieBotUI",
    },
    {
      name: "Awesome GitHub Profiles",
      imageSrc:"https://user-images.githubusercontent.com/624760/91445261-cefd2f80-e86d-11ea-8421-4553b29d2e4a.png",
      description: "List of GitHub profiles that have awesome customization, that you can use for inspiration",
      link: "https://github.com/EddieJaoudeCommunity/awesome-github-profiles",
    },
    {
      name: "Hacktoberfest practice",
      imageSrc:"https://user-images.githubusercontent.com/624760/91445718-61053800-e86e-11ea-81c7-751328c63e85.png",
      description: "Repo for you to raise a Pull Request for practice",
      link: "https://github.com/EddieJaoudeCommunity/hacktoberfest-practice",
    }
  ];

  const moderatorsData = [
    {
      name: "Stephen Mount",
      desc: "After 10+ years in software engineering, I am coming up with ideas and things to reverse engineer things for the new wave of ARM etc etc",
      github: "https://github.com/stemount",
      website: "https://ste.london/",
      img: "https://avatars1.githubusercontent.com/u/150512",
      alt: "@stemount"
    },
    {
      name: "Michael Mba",
      desc: "Linux Systems Integrator | Open Source Enthusiast | Photographer | Gamer || Starting my Python journey.",
      github: "https://github.com/mikeysan",
      website: "https://mikeysan.hashnode.dev/",
      img: "https://avatars0.githubusercontent.com/u/13338176?s=460&u=d66a31344752bb3fa882a59b3effb10e084f226c&v=4",
      alt: "@mikeysan"
    },
    {
      name: "Praveen Kumar ",
      desc: "Microsoft MVP, Web Developer and Computer Software & UX Architect. Mentor - Full Stack @Thinkful-Ed.",
      github: "https://github.com/praveenscience",
      website: "https://praveen.science/",
      img: "https://avatars1.githubusercontent.com/u/1830380?s=460&u=74697d8b1cbf3e16adec7b411369afbd53ce4864&v=4",
      alt: "@praveenscience"
    },
    {
      name: "David" ,
      desc: "Job: Software Developer Consultant I love programming, more specifically w/ Kotlin... it\'s just the best. Very interested in Web Dev and building discord bots",
      github: "https://github.com/BOLT04",
      website: "https://bolt04.github.io/react-ultimate-resume/",
      img: "https://avatars1.githubusercontent.com/u/18630253?s=460&u=36cdb692666236ff5db7aa3c71e58327bdbdecc7&v=4",
      alt: "@BOLT04"
    },
    {
      name: "Eddie Jaoude" ,
      desc: "Fullstack open source DevRel! I love code and the community :). GitHub Star ⭐ program 🤓",
      github: "https://github.com/eddiejaoude",
      website: "http://youtube.com/eddiejaoude?sub_confirmation=1",
      img: "https://avatars3.githubusercontent.com/u/624760?s=460&v=4",
      alt: "@eddiejaoude"
    },
    {
      name: "Petra",
      desc: "Linux and blockchain. Looking for ways to change the world.",
      github: "https://github.com/metaverde",
      website: "https://metaverde.github.io/",
      img: "https://avatars1.githubusercontent.com/u/32101027?s=460&u=a3204811c6965f28996b6bcd36bdc800216d5dfe&v=4",
      alt: "@metaverde"
    },
    {
      name: "Amandine Flachs",
      desc: "",
      github: "https://github.com/AmandineFlachs",
      website: "https://www.flachsconsulting.com/",
      img: "https://avatars0.githubusercontent.com/u/29413522?s=460&v=4",
      alt: "@AmandineFlachs"
    }
  ]
</script>
<div
  class="min-w-screen min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5"
>
  <img class="w-1/2" src="img/hero.svg" alt="colllaboration sketch" />
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

  <div id="projects">
    <h2 class="text-center text-3xl font-semibold text-indigo-100">
      Our Projects
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      {#each cardData as cardItem}
        <Card {...cardItem} />
      {/each}
    </div>
  </div>

  <div
    class="flex flex-col items-center bg-white lg:rounded m-12 py-8 px-4 lg:px-16 lg:max-w-4xl"
  >
    <h2 class="text-center text-4xl py-5 font-semibold">
      How to join our
      <span class="text-teal-600 border-b-2 border-teal-600">community</span
      >?
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

  <ModeratorCard {moderatorsData}/>

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
