<template>
  <div class="py-4 flex justify-between items-center">
    <img src="../assets/img/logo.svg" class="max-h-14" alt="Art By Code Logo" />
    <img
      src="../assets/img/dot.svg"
      alt="Dot Img"
      class="absolute z-0 right-1/3"
    />
    <button
      class="px-4 py-2 shadow rounded block md:hidden"
      @click="open = !open"
    >
      <i class="fa fa-bars"></i>
    </button>
    <ul class="hidden md:flex z-10">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Pelayanan</a></li>
      <li><a href="#">Karya Kami</a></li>
      <li><a href="#">Harga</a></li>
      <li><a href="#">Kontak</a></li>
    </ul>
  </div>
  <ul class="flex-col md:hidden z-10 duration-200" v-if="open">
    <li class="active"><a href="#">Home</a></li>
    <li><a href="#">Pelayanan</a></li>
    <li><a href="#">Karya Kami</a></li>
    <li><a href="#">Harga</a></li>
    <li><a href="#">Kontak</a></li>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const open = ref(false);

    return { open };
  },
};
</script>

<style scoped>
a {
  color: #115b76;
}

.active {
  border-bottom: 3px solid #115b76;
}

li {
  @apply md:ml-6 border-b border-white duration-200;
}
li:hover {
  border-bottom: 3px solid #115b76;
}
</style>