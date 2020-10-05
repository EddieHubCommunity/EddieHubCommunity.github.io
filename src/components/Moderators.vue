<template>
  <div class="container my-8 p-5 bg-white rounded-lg">
    <h2 class="text-center text-4xl mb-5 py-5 font-semibold">
      Our Moderators
    </h2>
    <!-- Start for loop MODERATORS-->
    <div v-for="moderators in moderatorsData" :key="moderators">
      <div
        class="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 py-2"
      >
        <div
          class="bg-gray-0 h-32 md:h-48 lg:h-48"
          v-for="moderator in moderators"
          :key="moderator"
        >
          <div class="flex flex-inline">
            <div class="h-32 w-32 lg:h-48 lg:w-48 md:h-48 md:w-48">
              <img
                class="rounded-full"
                :src="moderator.image"
                :alt="'@' + moderator.image_alt"
              />
            </div>
            <div
              class="lg:w-2/3 md:w-2/3 sm:w-2/3 px-5 pt-5 sm:pt-2 lg:pt-5 rounded-r-lg"
            >
              <!-- TAGS -->
              <span v-for="tags in moderator.tags" :key="tags">
                <label
                  class="rounded text-black text-sm mr-1 p-1"
                  :style="{ backgroundColor: tags.color }"
                >
                  {{ tags.tag }}
                </label>
              </span>
              <h1
                class="font-medium text-lg sm:text-xl md:text-xl lg:text-xl xl:text-xl font-medium pt-2 sm:pt-1 md:pt-1 lg:pt-1"
              >
                {{ moderator.name }}
              </h1>
              <p
                class="font-light text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm py-1 font-normal hidden md:block lg:block break-words"
              >
                {{ moderator.bio }}
              </p>
              <div
                class="hidden lg:inline-flex md:inline-flex flex flex-inline"
              >
                <div class="flex flex-inline">
                  <a target="_blank" :href="moderator.github">
                    <i class="fa fa-github-alt pr-1 pt-6 icon"></i>
                    <p
                      class="inline pr-5 pt-5 text-purple-500 text-lg font-medium"
                    >
                      GitHub
                    </p>
                  </a>
                </div>
                <div class="flex flex-inline">
                  <a target="_blank" :href="moderator.website">
                    <i class="fa fa-link pr-1 pt-6 icon"></i>
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
                  <a target="_blank" :href="moderator.github">
                    <i class="fa fa-github-alt pt-5 pr-5 icon_small"></i>
                  </a>
                </div>
                <div>
                  <a target="_blank" :href="moderator.website">
                    <i class="fa fa-link pt-5 pr-5 icon_small"></i>
                  </a>
                </div>
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
import moderatorsData from "../assets/data/moderators.json";

export default {
  data() {
    return {
      moderatorsData
    };
  }
};
</script>

<style lang="css" scoped>
i.icon {
  font-size: 18px;
  color: rgb(109, 71, 199);
  font-style: normal;
}

.icon_small {
  font-size: 20px;
  color: rgb(109, 71, 199);
}
</style>
