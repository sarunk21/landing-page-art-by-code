<template>
  <div class="container mx-auto px-8">
    <Navbar />
    <Hero />
    <Map />
    <Work />
    <Form />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/content/Hero.vue";
import Map from "../components/content/Map.vue";
import Work from "../components/content/Work.vue"
import Form from "../components/content/FormContact.vue"

export default {
  name: "Home",
  components: { Navbar, Hero, Map, Work, Form },
};
</script>

<style >
</style>
