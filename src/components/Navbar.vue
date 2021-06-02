<template>
  <div class="py-4 grid grid-cols-12 items-center">
    <img
      src="../assets/img/logo.svg"
      class="max-h-14 col-span-6"
      alt="Art By Code Logo"
      data-aos="fade-down"
      data-aos-duration="1200"
    />
    <img
      src="../assets/img/dot.svg"
      alt="Dot Img"
      class="hidden md:block absolute z-0 right-1/3 w-1/6"
    />
    <button
      class="px-4 py-2 shadow rounded ml-auto md:hidden col-span-6"
      @click="open = !open"
    >
      <i class="fa fa-bars"></i>
    </button>
    <ul
      class="z-10 col-span-12 mt-6 justify-between items-center md:mt-0 md:col-span-6 md:flex"
      :class="[{ block: open }, { hidden: !open }]"
      :data-aos="!open ? 'fade-left' : ''"
      data-aos-duration="1300"
    >
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Pelayanan</a></li>
      <li><a href="#">Karya Kami</a></li>
      <li><a href="#">Harga</a></li>
      <li><a href="#">Kontak</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
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
  @apply border-b border-white duration-200;
}

li:hover {
  border-bottom: 3px solid #115b76;
}
</style>