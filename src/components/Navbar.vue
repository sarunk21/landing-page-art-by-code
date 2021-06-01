<template>
  <div class="py-4 flex justify-between items-center">
    <img src="../assets/logo.png" class="max-h-14" alt="Art By Code Logo" />
    <ul class="flex">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Pelayanan</a></li>
      <li><a href="#">Karya Kami</a></li>
      <li><a href="#">Harga</a></li>
      <li><a href="#">Kontak</a></li>
    </ul>
  </div>
</template>

<style scoped>
a {
  color: #115b76;
}

.active {
  border-bottom: 3px solid #115b76;
}

li {
  @apply mr-6 border-b border-white duration-200;
}
li:hover {
  border-bottom: 3px solid #115b76;
}
</style>