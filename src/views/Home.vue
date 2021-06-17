<template>
  <div class="container mx-auto px-8 overflow-hidden">
    <Navbar />
    <Hero />
    <Map />
    <Service />
    <Team />
  </div>
  <ContactUs />
  <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/content/Hero.vue'
import Map from '../components/content/Map.vue'
import Service from '../components/content/Service.vue';
import Team from '../components/content/Team.vue'
import Footer from '../components/content/Footer.vue'
import ContactUs from '../components/content/ContactUs.vue'

export default {
  name: "Home",
  components: { Navbar, Hero, Map, Footer, Service, Footer, ContactUs },
};
</script>
