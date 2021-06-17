<template>
  <h1 class="text-center font-medium text-2xl md:text-4xl my-12 py-6 sub">
    Semua Layanan Yang Kami Berikan Untukmu
  </h1>

  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <div
        class="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-3 relative justify-items-center justify-around "
      >
        <img
          src="@/assets/img/circle.svg"
          class="invisible md:visible absolute -top-6 right-8 z-0"
          alt="circle"
        />

        <img
          src="@/assets/img/circle.svg"
          class="invisible md:visible absolute -bottom-1 left-5 z-0"
          alt="circle"
        />

        <div
          class="border px-6 py-12 mb-8 md:w-2/3 rounded-lg md:rounded-service-box-web shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          <img src="@/assets/img/web.svg" alt="web development" />
          <h3 class="font-medium text-sm py-2">Web Development</h3>
          <p class="info text-xs">
            Situs Web Yang Dibuat Khusus Dan Responsif. Kelola Konten Seperti
            Yang Anda Inginkan.
          </p>
        </div>

        <div
          class="border px-6 py-12 mb-8 md:w-2/3 rounded-lg md:rounded-service-box-mobile shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          <img src="@/assets/img/mobile.svg" alt="web development" />
          <h3 class="font-medium text-sm py-2">Mobile Development</h3>
          <p class="info text-xs">
            Pembuatan Aplikasi Cross Platform Dengan Teknologi Masa Kini.
          </p>
        </div>

        <div
          class="border px-6 py-12 mb-8 md:w-2/3 ui z-10 shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="350"
          data-aos-duration="1000"
        >
          <img src="@/assets/img/ui-ux.svg" alt="web development" />
          <h3 class="font-medium text-sm py-2">UI/UX Design</h3>
          <p class="info text-xs">
            Punya Ide Bagus ? Biarkan Kami Membuat Dan Mengembangkan Design Yang Kamu
            Inginkan.
          </p>
        </div>

        <div
          class="border px-6 py-12 md:w-2/3 z-10 mb-8 machine shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="650"
          data-aos-duration="1000"
        >
          <img src="@/assets/img/machine.svg" alt="machine learning" />
          <h3 class="font-medium text-sm py-2">Machine Learning</h3>
          <p class="info text-xs">
            Lorem Ipsum Dolor Sit Amet, Constectur This Is Lorem Ipsum Text, We
            Dont Have Copy Writer LOL.
          </p>
        </div>

        <div
          class="border px-6 py-12 md:w-2/3 mb-8 rounded-lg md:rounded-service-box-automation shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="550"
          data-aos-duration="1000"
        >
          <img src="@/assets/img/automation.svg" alt="automation system" />
          <h3 class="font-medium text-sm py-2">Automation System</h3>
          <p class="info text-xs">
            Lorem Ipsum Dolor Sit Amet, Constectur Adipsiewfjkbqy Aqwidh.
          </p>
        </div>

        <div
          class="border px-6 py-12 md:w-2/3 mb-8 rounded-lg md:rounded-service-box-branding shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="450"
          data-aos-duration="1000"
        >
          <img src="@/assets/img/branding-ads.svg" alt="web development" />
          <h3 class="font-medium text-sm py-2">Branding & Digital Ads</h3>
          <p class="info text-xs">
            Capai Tujuan Anda Melalui Otomatisasi Pemasaran, SEO, Komunitas, Dll.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sub {
  color: #115b76;
}

.info {
  opacity: 0.7;
}

.web {
  background: #ffff;
  border-radius: 40px 40px 5px 40px;
}

.mobile {
  background: #ffff;
  border-radius: 30px 30px 5px 5px;
}

.ui {
  background: #ffff;
  @apply rounded-lg
}

@media(min-width: 768px){
  .ui {
  border-radius: 40px 40px 40px 5px;

  }
}

.machine {
  background: #ffff;
  @apply rounded-lg
}

@media(min-width: 768px){
  .machine {
  border-radius: 40px 5px 40px 40px;

  }
}

.automation {
  background: #ffff;
  border-radius: 5px 5px 40px 40px;
}

.branding {
  background: #ffff;
  border-radius: 5px 40px 40px 40px;
}
</style>
