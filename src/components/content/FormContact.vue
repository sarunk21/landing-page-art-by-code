<template>
  <div class="mt-28 FormContact mb-5">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <div class="py-14 px-0 md:px-16">
          <h1
            class="text-xl md:text-3xl dark-green font-open-sans font-semibold"
          >
            Mari Bicara 😉
          </h1>
          <h1
            class="text-lg md:text-2xl dark-green font-open-sans font-semibold"
          >
            Hebatkan Apa Kata Mereka?
          </h1>
        </div>
      </div>
      <form class="-mt-10 md:-mt-0">
        <div>
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="mr-0 md:mr-7">
              <label
                class="
                  text-xl
                  md:text-3xl
                  font-open-sans font-semibold
                  dark-green
                "
                >Nama</label
              >
              <input
                type="text"
                name="name"
                placeholder="Tulis nama kamu disini"
                required
                class="
                  pt-3
                  pb-2
                  block
                  w-full
                  px-0
                  mt-0
                  bg-transparent
                  border-0 border-b-2
                  appearance-none
                  focus:outline-none
                  focus:ring-0
                  focus:border-green-700
                  border-green-800
                "
              />
            </div>
            <div class="mb-5 mt-8 md:mt-0">
              <label
                class="
                  text-xl
                  md:text-3xl
                  font-open-sans font-semibold
                  dark-green
                "
                >Email</label
              >
              <input
                type="text"
                name="name"
                placeholder="Tulis email kamu disini"
                required
                class="
                  pt-3
                  pb-2
                  block
                  w-full
                  px-0
                  mt-0
                  bg-transparent
                  border-0 border-b-2
                  appearance-none
                  focus:outline-none
                  focus:ring-0
                  focus:border-green-700
                  border-green-800
                "
              />
            </div>
          </div>
          <div class="mt-4 md:mt-7">
            <label
              class="
                text-xl
                md:text-3xl
                font-open-sans font-semibold
                dark-green
              "
              >Pesan</label
            >
            <textarea
              type="text"
              name="name"
              placeholder="Tulis pesan kamu disini"
              required
              class="
                pt-3
                pb-2
                block
                w-full
                px-0
                mt-0
                bg-transparent
                border-0 border-b-2
                appearance-none
                focus:outline-none
                focus:ring-0
                focus:border-green-700
                border-green-800
              "
            ></textarea>
          </div>
        </div>
        <button
          class="
            text-white
            py-1
            md:py-2
            px-8
            md:px-12
            rounded-full
            mt-10
            md:mt-5
          "
        >
          Kirim
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dark-green {
  color: #115b76;
}
button {
  background-color: #1dc0ad;
}
</style>