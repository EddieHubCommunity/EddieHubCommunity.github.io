<script>
  import Badge from "./Badge.svelte";
  export let name = "";
  export let description = "";
  export let website = "";
  export let imageSrc = "";
  export let github = "";
  export let badges = [];
</script>

<div class="bg-gray-0 h-32 md:h-48 lg:h-48">
  <div class="flex flex-inline">
    {#if imageSrc}
      <div class="h-32 w-32 lg:h-48 lg:w-48 md:h-48 md:w-48">
        <img class="rounded-full" src={imageSrc} alt={name} />
      </div>
    {/if}

    <div
      class="lg:w-2/3 md:w-2/3 sm:w-2/3 px-5 pt-5 sm:pt-2 lg:pt-5 rounded-r-lg">
      {#each badges as type}
        <Badge {type} />
      {/each}
      <h1
        class="font-medium text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-medium pt-2 sm:pt-1 md:pt-1 lg:pt-1">
        {name}
      </h1>
      <p
        class="font-light text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm py-1 font-normal hidden md:block lg:block break-words">
        {description}
      </p>
      <div class="hidden lg:inline-flex md:inline-flex flex flex-inline">
        {#if github}
          <div class="flex flex-inline">
            <a target="_blank" href="https://github.com/{github}">
              <i class="fa fa-github-alt pr-1 pt-6 text-purple-500 text-lg" />
              <p class="inline pr-5 pt-5 text-purple-500 text-lg font-medium">
                GitHub
              </p>
            </a>
          </div>
        {/if}

        {#if website}
          <div class="flex flex-inline">
            <a target="_blank" href={website}>
              <i class="fa fa-link pr-1 pt-6 text-purple-500 text-lg" />
              <p class="inline pr-5 pt-5 text-purple-500 text-lg font-medium">
                Website
              </p>
            </a>
          </div>
        {/if}
      </div>
      <!-- for small screens -->
      <div class="flex-inline lg:hidden sm:flex-inline md:hidden flex flex-inline">

        {#if github}
          <div>
            <a target="_blank" href="https://github.com/{github}">
              <i class="fa fa-github-alt pt-5 pr-5 text-purple-500 text-xl"></i>
            </a>
          </div>
        {/if}

        {#if website}
          <div>
            <a target="_blank" href={website}>
              <i class="fa fa-link pt-5 pr-5 text-purple-500 text-xl"></i>
            </a>
          </div>
        {/if}

      </div>
    </div>
  </div>
</div>
