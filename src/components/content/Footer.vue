<template>
    <div class="grid grid-cols-12">
        <div class="col-span-12 bg-contain bg-no-repeat bg-bottom" :style="{ backgroundImage: `url(${require('@/assets/img/footer-bg.svg')})` }" style="height: 450px">
            <div class="grid grid-cols-12 mx-auto px-4 pt-12 mt-40">
                <div class="grid grid-cols-2 justify-center">
                    <img src="@/assets/img/logo.svg" class="h-20 ml-7" alt="logo footer">
                </div>

                <div class="col-span-3">
                    <p class="pt-7 font-montserrat font-semibold text-3xl text-white">Art By Code</p>
                    <p class="text-white pt-3">kita bisa menciptakan <br> sesuatu yang indah <br> dari kode.</p>
                </div>

                <div class="col-span-3">
                    <h2 class="font-medium text-white text-2xl font-poppins">Media Sosial</h2>
                    <ul>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">WhatsApp</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
                
                <div class="col-span-3">
                    <h2 class="font-medium text-white text-2xl font-poppins">Useful Links</h2>
                    <ul>
                        <li>
                            <a href="#">Privacy & Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Jam Operasional</a>
                        </li>
                    </ul>
                </div>

                <div class="col-span-2">
                    <h2 class="font-medium text-white text-2xl font-poppins">Pengembang</h2>
                    <ul>
                        <li>
                            <a href="#">Developer</a>
                        </li>
                        <li>
                            <a href="#">Sumber Aset</a>
                        </li>
                        <li>
                            <a href="#">Laporkan Bug</a>
                        </li>
                        <li>
                            <a href="#">Kirim Masukan</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    li {
        margin: 11px 0;
    }

    li a{
        color: white;
        opacity: 0.7;
    }
</style>