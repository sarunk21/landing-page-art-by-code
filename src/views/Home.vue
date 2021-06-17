<template>
  <div class="container mx-auto px-8 overflow-hidden">
    <Navbar />
    <Hero />
    <Map />
    <Service />
    <Work />
    <Team />
  </div>
  <Review />
  <Form />
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
import Review from '../components/content/Review.vue'
import Work from '../components/content/Work.vue'
import Form from '../components/content/FormContact.vue'

export default {
  name: "Home",
  components: { Navbar, Hero, Map, Footer, Service, Footer, ContactUs,  Work, Form, Review },
};
</script>
