<template>
  <div class="my-20">
    <h1 class="text-center font-semibold text-2xl md:text-4xl text-blue-dark mb-10 md:mb-28" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600">
      Apa Yang Mereka Katakan
    </h1>
    <div class="bg-transparent md:bg-review bg-contain bg-center">
      <div class="grid grid-cols-12 px-8 md:px-20 gap-0 md:gap-10">
        <div class="col-span-12 md:col-span-4 card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
          <div class="flex items-center">
            <img src="@/assets/img/dummy-photo.svg" alt="Dummy Photo" />
            <div class="ml-2">
              <h1 class="font-semibold">Ravi</h1>
              <p class="text-sm">Fullstack Developer</p>
            </div>
          </div>
          <div class="my-6">
            <p class="comment">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quos ea in illum beatae, aliquam eaque itaque soluta est aspernatur.
            </p>
          </div>
          <div class="inline">
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 card my-10 md:my-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1200">
          <div class="flex items-center">
            <img src="@/assets/img/dummy-photo.svg" alt="Dummy Photo" />
            <div class="ml-2">
              <h1 class="font-semibold">Rafli</h1>
              <p class="text-sm">Fullstack Developer</p>
            </div>
          </div>
          <div class="my-6">
            <p class="comment">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quos ea in illum beatae, aliquam eaque itaque soluta est aspernatur.
            </p>
          </div>
          <div class="inline">
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1400">
          <div class="flex items-center">
            <img src="@/assets/img/dummy-photo.svg" alt="Dummy Photo" />
            <div class="ml-2">
              <h1 class="font-semibold">Kurniawan</h1>
              <p class="text-sm">Fullstack Developer</p>
            </div>
          </div>
          <div class="my-6">
            <p class="comment">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quos ea in illum beatae, aliquam eaque itaque soluta est aspernatur.
            </p>
          </div>
          <div class="inline">
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
            <i class="fa fa-star" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
i {
  @apply mr-2 text-green-dark;
}

.card {
  box-shadow: 4px 6px 25px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  @apply bg-white px-8 break-normal py-12;
}

.comment {
  color: #464646;
}
</style>
