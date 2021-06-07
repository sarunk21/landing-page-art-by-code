<template>
  <div class="grid grid-cols-12 mt-3">
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
        Art By <span id="judul"></span> ABC
      </h1>
      <p
        class="text-xs md:text-lg my-4 md:my-6 opacity-70"
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
        src="@/assets/img/hero.svg"
        alt="Hero Image"
        class="md:ml-auto hero"
        data-aos="zoom-in"
        data-aos-duration="1500"
      />
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";
import { onMounted } from "vue";

export default {
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
  height: 250px;
}

.hero {
  max-height: 250px;
}

@media (min-width: 768px) {
  .map {
    height: 350px;
  }
  .hero {
    max-height: 490px;
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