<template>
  <div
    class="min-w-screen min-h-screen bg-gray-900 flex flex-col items-center justify-center px-5 py-5"
  >
    <!-- HEADER -->
    <Header />
    <!-- CARDS > PROJECTS -->
    <Projects />
    <!-- How to Join -->
    <Join />
    <!-- MODERATORS -->
    <Moderators />
    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Moderators from "./components/Moderators";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Join from "./components/Join";

export default {
  name: "App",
  components: {
    Header,
    Moderators,
    Projects,
    Join,
    Footer
  }
};
</script>

<style></style>
