<template>
  <div class="grid grid-cols-12 justify-items-center items-center relative mb-20 h-contactUs overflow-hidden">
    <div class="col-span-12 flex flex-col justify-center items-center text-blue-dark w-auto md:w-contactUs">
      <h1 class="text-4xl font-semibold" data-aos="fade-right" data-aos-duration="1000">
        Tunggu Apa Lagi
        <span data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000"> ?</span>
      </h1>
      <p class="my-5 text-sm md:text-base text-center" data-aos="zoom-out" data-aos-duration="800" data-aos-delay="1000">
        Yuk mulai kerja sama dengan kami dan dapatkan pengalaman yang berbeda dari yang lainnya
      </p>
      <button class="px-8 py-2 btn-contact" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1200">
        Kontak Kami
      </button>
    </div>
    <img src="@/assets/img/dot.svg" alt="Dot Bg" class="absolute top-0 right-0 hidden md:block" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800" />
    <img src="@/assets/img/dot.svg" alt="Dot Bg" class="absolute bottom-0 left-0 hidden md:block" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800" />
  </div>
</template>

<style scoped>
.btn-contact {
  background-color: #1dc0ad;
  color: #ffffff;
  @apply border rounded-full border-opacity-0 duration-1000;
}

.btn-contact:hover {
  background-color: #28dac5;
}
</style>
