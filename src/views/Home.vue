<template>
  <div class="container mx-auto px-10">
    <Navbar />
    <div class="grid grid-cols-12 mt-5">
      <div class="col-span-12 md:col-span-6 mt-1 md:mt-16">
        <h1 class="title" style="color: #1dc0ad">Selamat Datang Di</h1>
        <h1 class="title font-montserrat" style="color: #115b76">
          Art By Code | <span class="font-poppins">ABC</span>
        </h1>
        <p class="text-sm md:text-lg my-6 opacity-70" style="color: #115b76">
          Kamu bisa menciptakan sesuatu yang indah dari kode
        </p>
        <div class="flex">
          <button class="px-4 py-2 text-sm md:text-lg mr-6 btn-contact">
            Kontak Kami
          </button>
          <button class="px-4 py-2 text-sm md:text-lg btn-price">
            Lihat Harga
          </button>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 mt-8 md:mt-0">
        <img
          src="../assets/img/hero.svg"
          alt="Hero Image"
          class="ml-auto"
          style="max-height: 450px"
        />
      </div>
    </div>
    <div class="grid grid-cols-12 mt-8">
      <div
        class="grid items-center justify-items-center col-span-12 bg-contain bg-no-repeat bg-center"
        style="height: 350px"
        :style="{ backgroundImage: `url(${require('@/assets/img/map.svg')})` }"
      >
        <div
          class="flex flex-col justify-center items-center md:w-1/2 text-center"
        >
          <h1 class="text-2xl md:text-4xl font-medium" style="color: #1dc0ad">
            Ayo Kenalan
          </h1>
          <p class="my-6 text-xs md:text-lg">
            Singkatnya seperti ini, kami adalah sekumpulan orang yang
            menciptakan apapun dari kode
          </p>
          <p class="text-xs md:text-lg">
            Art By Code ini merupakan website yang bisa melayani apa saja yang
            kamu butuhkan saat ini
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: { Navbar },
};
</script>

<style scoped>
.title {
  @apply text-2xl font-semibold leading-snug md:text-5xl md:leading-snug;
}

.btn-contact {
  background-color: #1dc0ad;
  color: #ffffff;
  border-radius: 10px;
  @apply border border-opacity-0 duration-200;
}

.btn-price {
  border-color: #1dc0ad;
  color: #1dc0ad;
  border-radius: 10px;
  @apply border duration-200;
}
</style>
