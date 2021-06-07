<template>
  <div class="container mx-auto px-8">
    <Navbar />
    <Hero />
    <Map />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/content/Hero.vue";
import Map from "../components/content/Map.vue";

export default {
  name: "Home",
  components: { Navbar, Hero, Map },
};
</script>

<style >
</style>
