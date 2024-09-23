<script>
    import ActividadeDaInstituicao from "$lib/ActividadeDaInstituicao.svelte";
  import Footer from "$lib/Footer.svelte";
import TemosParaSi  from "$lib/TemosParaSi.svelte";
</script>

<section class="bg-white pt-12 lg:px-20">
   

    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
                    Sobre a escola. Fundação e História
                </h1>
                <span></span>
                <div class="mt-8 space-y-5">
                    <p class="flex items-center -mx-2 text-gray-700 ">
                        Fundado em 2012, o Instituto Médio Politécnico SmartBits rapidamente se estabeleceu como uma instituição de ensino de excelência, focada no desenvolvimento de habilidades tecnológicas entre seus alunos. Localizado estrategicamente em Viana, Luanda Sul, dentro do condomínio Girassol, o SmartBits oferece um ambiente seguro e propício para aprendizado.
                    </p>

                   
                </div>
            </div>


        </div>

        <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="sala.jpg" alt="glasses photo">
        </div>
    </div>
</section>
<TemosParaSi />
<ActividadeDaInstituicao />
<section class="bg-gray-100  lg:py-12 lg:flex lg:justify-center">
    <div
        class="overflow-hidden bg-white  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div class="lg:w-1/2">
            <div class="h-64 bg-cover lg:h-full" style="background-image:url('troféu.jpg')">
                
            </div>
        </div>

        <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
              </svg>
            <h2 class="text-2xl font-semibold text-gray-800  md:text-3xl">
                Conquisatas <span class="text-blue-500">notáveis</span>
            </h2>

            <p class="mt-4 text-gray-500 ">
                Destacamo-nos nacionalmente ao conquistar o primeiro lugar na Maratona Nacional de Programação, superando até mesmo universidades renomadas. Esta conquista é um testemunho do talento de nossos alunos e da dedicação de nossos excelentes docentes.
            </p>


              
        </div>
    </div>
</section>
<Footer />