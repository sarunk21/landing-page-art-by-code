<template>
  <Navbar />
  <Hero />
  <Map />
  <Service />
  <Work />
  <Team />
  <Review />
  <Form />
  <ContactUs />
  <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/home/Hero.vue'
import Map from '../components/home/Map.vue'
import Service from '../components/home/Service.vue'
import Team from '../components/home/Team.vue'
import Footer from '../components/home/Footer.vue'
import ContactUs from '../components/home/ContactUs.vue'
import Review from '../components/home/Review.vue'
import Work from '../components/home/Work.vue'
import Form from '../components/home/FormContact.vue'

export default {
  name: 'Home',
  components: { Navbar, Hero, Map, Footer, Service, Footer, ContactUs, Team, Work, Form, Review },
}
</script>
