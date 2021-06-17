<template>
  <div class="container mx-auto px-8 overflow-hidden">
    <Navbar />
    <Hero />
    <Map />
    <Service />
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/content/Hero.vue";
import Map from "../components/content/Map.vue";
import Footer from "../components/content/Footer.vue";
import Service from '../components/content/Service.vue';

export default {
  name: "Home",
  components: { Navbar, Hero, Map, Footer, Service },
};
</script>

<style >
</style>
