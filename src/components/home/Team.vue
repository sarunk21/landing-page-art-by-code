<template>
  <div class="container mx-auto px-8 overflow-hidden">
    <div class="grid grid-cols-12 py-6 my-20 overflow-hidden">
      <div class="col-span-12 flex justify-between items-center">
        <h1 class="title font-open-sans" data-aos="fade-right" data-aos-duration="1200">
          Tim Kami
        </h1>
        <a href="#" class="opacity-60 text-sm md:text-lg" data-aos="fade-left" data-aos-duration="1200">Anggota Lainnya</a>
      </div>
      <div class="col-span-12 py-6 grid grid-cols-12 mt-2 gap-0 md:gap-16">
        <div class="col-span-12 md:col-span-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-anchor-placement="center-bottom">
          <div class="box mr-auto rounded-4xl" style="background-color: #D3FFCC">
            <img src="@/assets/img/team/achmad-fauzi.svg" alt="Foto Ahcmad Fauzi" />
          </div>
          <div class="details">
            <div class="detail-title">
              <h1 class="text-lg md:text-2xl text-blue-dark font-semibold">
                Achmad Fauzi
              </h1>
              <p class="text-base font-bold text-green-dark">Founder</p>
            </div>
            <p class="detail-job">Fullstack Web Development</p>
            <div class="detail-links">
              <a href="">LinkedIn</a>
              <a href="" class="ml-6">Github</a>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 mt-20 md:mt-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000" data-aos-anchor-placement="center-bottom">
          <div class="box mr-auto md:mx-auto rounded-4xl" style="background-color: #E1E8FB">
            <img src="@/assets/img/team/hafizh-maulana.svg" alt="Foto Hafizh" />
          </div>
          <div class="details">
            <div class="detail-title">
              <h1 class="text-lg md:text-2xl text-blue-dark font-semibold">
                Hafizh Maulana Y.
              </h1>
              <p class="text-base font-bold text-green-dark">Leader</p>
            </div>
            <p class="detail-job">Fullstack Web Development</p>
            <div class="detail-links">
              <a href="">LinkedIn</a>
              <a href="" class="ml-6">Github</a>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 mt-20 md:mt-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1400" data-aos-anchor-placement="center-bottom">
          <div class="box mr-auto md:ml-auto rounded-4xl" style="background-color: #FFE8CD">
            <img src="@/assets/img/team/m-kautsar-p.svg" alt="Foto Kautsar" />
          </div>
          <div class="details">
            <div class="detail-title">
              <h1 class="text-lg md:text-2xl text-blue-dark font-semibold">
                M. Kautsar P.
              </h1>
              <p class="text-base font-bold text-green-dark">Member</p>
            </div>
            <p class="detail-job">Fullstack Web Development</p>
            <div class="detail-links">
              <a href="">LinkedIn</a>
              <a href="" class="ml-6">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="w-4/5 mx-auto border my-20 md:my-32" style="border-color:#6FD3C9" />
</template>

<style scoped>
.title {
  border-color: #115b76;
  @apply text-xl font-semibold border-b-4 py-1 text-blue-dark md:text-3xl;
}

.box {
  height: 80%;
  width: 100%;
  @apply flex items-center justify-center;
}

.details {
  @apply grid grid-cols-12;
}

.detail-title {
  @apply col-span-12 flex justify-between items-center mt-6;
}

.detail-job {
  @apply col-span-12 opacity-60 my-2;
}

.detail-links {
  color: #115b76;
  @apply col-span-12 flex items-center font-semibold;
}
</style>
