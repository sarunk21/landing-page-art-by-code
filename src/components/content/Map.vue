<template>
  <div class="grid grid-cols-12 my-10">
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
          Singkatnya seperti ini, kami adalah sekumpulan orang yang menciptakan
          apapun dari kode
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
</template>
