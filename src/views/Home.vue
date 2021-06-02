<template>
  <div class="container mx-auto px-8">
    <Navbar />
    <div class="grid grid-cols-12 mt-5">
      <div class="col-span-12 md:col-span-6 mt-1 md:mt-16">
        <h1
          class="title"
          style="color: #1dc0ad"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          Selamat Datang Di
        </h1>
        <h1 class="title font-montserrat" style="color: #115b76">
          Art By <span id="judul"></span> <span class="font-poppins">ABC</span>
        </h1>
        <p
          class="text-sm md:text-lg my-6 opacity-70"
          style="color: #115b76"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          Kamu bisa menciptakan sesuatu yang indah dari kode
        </p>
        <div class="flex" data-aos="fade-up" data-aos-duration="1300">
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
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="1000"
        />
      </div>
    </div>
    <div class="grid grid-cols-12 mt-10">
      <div
        class="grid items-center justify-items-center col-span-12 bg-contain bg-no-repeat bg-center map"
        :style="{ backgroundImage: `url(${require('@/assets/img/map.svg')})` }"
      >
        <div
          class="flex flex-col justify-center items-center md:w-1/2 text-center"
        >
          <h1
            class="text-2xl md:text-4xl font-medium"
            style="color: #1dc0ad"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Ayo Kenalan
          </h1>
          <p
            class="my-6 text-xs md:text-lg"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            Singkatnya seperti ini, kami adalah sekumpulan orang yang
            menciptakan apapun dari kode
          </p>
          <p
            class="text-xs md:text-lg"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
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
import Typed from "typed.js";
import { onMounted } from "vue";

export default {
  name: "Home",
  components: { Navbar },
  setup() {
    onMounted(() => {
      const judul = document.getElementById("judul");
      let type = new Typed(judul, {
        strings: ["Brush ^1000", "Paint ^1200", "Code ^100"],
        typeSpeed: 70,
        backSpeed: 60,
      });
    });
  },
};
</script>

<style scoped>
.title {
  @apply text-2xl font-semibold leading-snug md:text-5xl md:leading-snug;
}

.map {
  height: 200px;
}

@media (min-width: 768px) {
  .map {
    height: 350px;
  }
}

.btn-contact {
  background-color: #1dc0ad;
  color: #ffffff;
  border-radius: 10px;
  @apply border border-opacity-0 duration-200;
}

.btn-contact:hover {
  background-color: #28dac5;
}

.btn-price {
  border-color: #1dc0ad;
  color: #1dc0ad;
  border-radius: 10px;
  @apply border duration-200;
}

.btn-price:hover {
  border-color: #00ebcf;
  color: #00ebcf;
  @apply shadow-md;
}
</style>
