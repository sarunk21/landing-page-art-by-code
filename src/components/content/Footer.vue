<template>
  <div
    class="bg-footer md:bg-transparent md:bg-img-footer background h-full md:h-footer-bg"
  >
    <div
      class="container mx-auto px-8 grid grid-cols-12 items-stretch justify-center md:justify-items-center"
    >
      <div class="grid grid-cols-12 col-span-12 mb-6 gap-4 md:col-span-3">
        <div class="col-span-12 md:col-span-3">
          <img
            src="@/assets/img/logo.svg"
            class="h-16 md:h-auto"
            alt="Logo Art By Code"
          />
        </div>
        <div class="col-span-12 md:col-span-9">
          <h1 class="font-montserrat mb-3">
            Art By Code
          </h1>
          <p class="text-sm md:text-base opacity-75">
            Kami bisa menciptakan sesuatu yang indah dari kode
          </p>
        </div>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h1>Media Sosial</h1>
        <ul class="flex flex-col">
          <li><a href="">Instagram</a></li>
          <li><a href="">Whatsapp</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-3">
        <h1>Useful Links</h1>
        <ul class="flex flex-col">
          <li><a href="">Privasi & policy</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Jam Operasional</a></li>
        </ul>
      </div>
      <div class="col-span-6 md:col-span-3 mt-4 md:mt-0">
        <h1>Pengembang</h1>
        <ul class="flex flex-col">
          <li><a href="">Developer</a></li>
          <li><a href="">Sumber Aset</a></li>
          <li><a href="">Laporkan Bug</a></li>
          <li><a href="">Kirim masukan</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  @apply flex bg-bottom bg-cover items-center text-white pt-10 pb-10 md:pt-28 md:pb-0;
}

li {
  @apply mt-2 md:mt-4;
}

li a {
  @apply text-sm md:text-base opacity-70 duration-150 hover:opacity-100 hover:text-white;
}

h1 {
  @apply text-lg font-bold md:text-2xl;
}
</style>
