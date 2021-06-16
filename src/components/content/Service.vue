<template>
    <h1 class="text-center font-medium text-4xl my-12 py-6 sub">Semua Layanan Yang Kami Berikan Untukmu</h1>

    <div class="grid grid-cols-12 pt-10">
        <div class="col-span-12 bg-contain  bg-center bg-no-repeat" >
            
            

            <div class="grid grid-cols-1 md:grid-cols-3 relative justify-items-center justify-around ">
                <img src="@/assets/img/circle.svg" class="absolute -top-6 right-8 z-0" alt="circle">
                <div class="border px-6 py-12 w-2/3 web shadow-xl">
                    <img src="@/assets/img/web.svg" alt="web development">
                    <h3 class="font-medium text-sm py-2">Web Development</h3>
                    <p class="info text-xs">Situs Web Yang Dibuat Khusus Dan Responsif. Kelola Konten Seperti Yang Anda Inginkan</p>
                </div>

                <div class="border px-6 py-12 w-2/3 mobile shadow-xl">
                    <img src="@/assets/img/mobile.svg" alt="web development">
                    <h3 class="font-medium text-sm py-2">Mobile Development</h3>
                    <p class="info text-xs">Pembuatan Aplikasi Cross Platform Dengan Teknologi Kekinian</p>
                </div>

                <div class="border px-6 py-12 w-2/3 ui z-10 shadow-xl">
                    <img src="@/assets/img/ui-ux.svg" alt="web development">
                    <h3 class="font-medium text-sm py-2">UI/UX Design</h3>
                    <p class="info text-xs">Ide Bagus ? Biarkan Kami Membuat Dan Mengembangkan Design Yang Kamu Inginkan</p>
                </div>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 relative justify-items-center mt-12">
                <img src="@/assets/img/circle.svg" class="absolute -bottom-5 left-8 z-0" alt="circle">
                <div class="border px-6 py-12 w-2/3 z-10 machine shadow-xl">
                    <img src="@/assets/img/machine.svg" alt="web development">
                    <h3 class="font-medium text-sm py-2">Machine Learning</h3>
                    <p class="info text-xs">Lorem Ipsum Dolor Sit Amet, Constectur Adipsiewfjkbqy Aqwidh</p>
                </div>

                <div class="border px-6 py-12 w-2/3 automation shadow-xl">
                    <img src="@/assets/img/automation.svg" alt="web development">
                    <h3 class="font-medium text-sm py-2">Automation System</h3>
                    <p class="info text-xs">Lorem Ipsum Dolor Sit Amet, Constectur Adipsiewfjkbqy Aqwidh</p>
                </div>

                <div class="border px-6 py-12 w-2/3 branding shadow-xl">
                    <img src="@/assets/img/branding-ads.svg" alt="web development">
                    <h3 class="font-medium text-sm py-2">Branding & Digital Ads</h3>
                    <p class="info text-xs">Capai Tujuan Anda Melalui Otomatisasi Pemasaran, SEO, Komunitas, Dll</p>
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
    .sub{
        color: #115B76;
    }

    .info{
        opacity: 0.7;
    }

    .web{
        background: #ffff;
        border-radius: 40px 40px 5px 40px;
    }

    .mobile{
        background: #ffff;
        border-radius: 30px 30px 5px 5px;
    }

    .ui{
        background: #ffff;
        border-radius: 40px 40px 40px 5px;
    }
    
    .machine{
        background: #ffff;
        border-radius: 40px 5px 40px 40px;
    }

    .automation{
        background: #ffff;
        border-radius: 5px 5px 40px 40px;
    }

    .branding{
        background: #ffff;
        border-radius: 5px 40px 40px 40px;
    }
</style>