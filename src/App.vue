<template>
  <router-view />
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  created() {
    AOS.init()
  },
}
</script>

<style>
html {
  background-color: #edf8ff;
}
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>