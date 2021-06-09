<template>
  <router-view />
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  created() {
    AOS.init();
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
}
p{
  color: blue;
}
</style>