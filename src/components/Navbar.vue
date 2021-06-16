<template>
  <div class="py-4 grid grid-cols-12 items-center">
    <div class="col-span-6">
      <a href="/" class="inline-block">
        <img
          src="@/assets/img/logo.svg"
          class="h-14 md:h-16"
          alt="Art By Code Logo"
        />
      </a>
    </div>
    <button
      class="px-4 py-2 shadow rounded ml-auto md:hidden col-span-6"
      @click="open = !open"
    >
      <i class="fa fa-bars"></i>
    </button>
    <ul
      class="z-10 col-span-12 mt-6 justify-end items-center md:mt-0 md:col-span-6 md:flex"
      :class="[{ block: open }, { hidden: !open }]"
    >
      <li><a href="#" class="active">Home</a></li>
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
    }
  },
}
</script>

<style scoped>
a {
  color: #115b76;
  @apply font-poppins;
}

a:hover {
  color: #1dc0ad;
}

.active {
  color: #1dc0ad;
}

li {
  @apply duration-200 ml-0 mb-1 md:ml-6 md:mb-0;
}

li a {
  @apply opacity-75;
}
</style>
