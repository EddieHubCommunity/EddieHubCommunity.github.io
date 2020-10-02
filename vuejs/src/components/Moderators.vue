<template>
  <div class="container my-8 p-5 bg-white rounded-lg">
    <h2 class="text-center text-4xl mb-5 py-5 font-semibold">
      Our Moderators
    </h2>
    <!-- Start for loop MODERATORS-->
    <div
      class="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2"
    >
      <div class="bg-gray-0 h-32 md:h-48 lg:h-48">
        <div class="flex flex-inline">
          <div class="h-32 w-32 lg:h-48 lg:w-48 md:h-48 md:w-48">
            <img
              class="rounded-full"
              src="https://avatars3.githubusercontent.com/u/624760?s=460&v=4"
              alt="@eddiejaoude"
            />
          </div>
          <div
            class="lg:w-2/3 md:w-2/3 sm:w-2/3 px-5 pt-5 sm:pt-2 lg:pt-5 rounded-r-lg"
          >
            <button
              class="bg-yellow-400 rounded px-1 text-black text-sm ml-auto"
            >
              community
            </button>
            <button
              class="bg-green-400 rounded px-1 text-white text-sm ml-auto"
            >
              opensource
            </button>
            <h1
              class="font-medium text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-medium pt-2 sm:pt-1 md:pt-1 lg:pt-1"
            >
              Eddie Jaoude
            </h1>
            <p
              class="font-light text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm py-1 font-normal hidden md:block lg:block break-words"
            >
              Fullstack open source DevRel! I love code and the community :).
              GitHub Star ⭐ program 🤓
            </p>
            <div class="hidden lg:inline-flex md:inline-flex flex flex-inline">
              <div class="flex flex-inline">
                <a target="_blank" href="https://github.com/eddiejaoude">
                  <i
                    class="fa fa-github-alt pr-1 pt-6"
                    style="
                      font-size: 18px;
                      color: rgb(109, 71, 199);
                      font-style: normal;
                    "
                  ></i>
                  <p
                    class="inline pr-5 pt-5 text-purple-500 text-lg font-medium"
                  >
                    GitHub
                  </p>
                </a>
              </div>
              <div class="flex flex-inline">
                <a
                  target="_blank"
                  href="http://youtube.com/eddiejaoude?sub_confirmation=1"
                >
                  <i
                    class="fa fa-link pr-1 pt-6"
                    style="
                      font-size: 18px;
                      color: rgb(109, 71, 199);
                      font-style: normal;
                    "
                  ></i>
                  <p
                    class="inline pr-5 pt-5 text-purple-500 text-lg font-medium"
                  >
                    Website
                  </p>
                </a>
              </div>
            </div>
            <!-- for small screens -->
            <div
              class="flex-inline lg:hidden sm:flex-inline md:hidden flex flex-inline"
            >
              <div>
                <a target="_blank" href="https://github.com/eddiejaoude">
                  <i
                    class="fa fa-github-alt pt-5 pr-5"
                    style="font-size: 20px; color: rgb(109, 71, 199)"
                  ></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="http://youtube.com/eddiejaoude?sub_confirmation=1"
                >
                  <i
                    class="fa fa-link pt-5 pr-5"
                    style="font-size: 20px; color: rgb(109, 71, 199)"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END LOOP MODERATORS -->
  </div>
</template>

<script>
export default {
  name: "Moderators"
};
</script>

<style></style>
