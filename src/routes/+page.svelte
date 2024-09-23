<script>
  import Hero from "$lib/Hero.svelte";

  import Link from "$lib/Link.svelte";
  import Cards from "$lib/Cards.svelte";
  import Cursos from "$lib/Cursos.svelte";
  import Faq from "$lib/FaQs.svelte";
  import Footer from "$lib/Footer.svelte";
  import Testemunhas from "$lib/Testemonials.svelte"
  let faqs = [
    { question: 'Como faço para me inscrever',
      answer: 'Svelte é um framework'
    },
    { question: 'Como confirmar a matrícula?',
      answer: 'Svelte é um framework'
    },
    { question: 'Como ter acesso as minhas notas?',
      answer: 'Svelte é um framework'
    }

  ]
</script>

<!-- HERO-SECTION -->
<Hero />
<!-- SECÇÃO DO SOBRE NÓS -->
<section class="bg-white lg:px-20">
  <div class="container px-6 py-10 mx-auto">
    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
      Saiba mais <br /> Sobre a
      <span class="underline decoration-castanho-200">SMARTBITS</span>
    </h1>

    <p class="mt-4 text-gray-500 xl:mt-6">
      No Instituto Médio Politécnico SmartBits, reconhecemos a importância da
      parceria entre a escola e os encarregados de educação para o sucesso
      acadêmico e pessoal dos nossos alunos. Estamos comprometidos em
      proporcionar uma experiência educacional transparente, colaborativa e
      tecnologicamente avançada. Saiba como estamos facilitando essa conexão:
    </p>

    <div
      class="grid grid-cols-1 gap-5 *:2xl:p-8 *:p-8 *:xl:p-6 mt-8 xl:mt-12 xl:gap-5 2xl:gap-12 md:grid-cols-2 xl:grid-cols-3"
    >
      <article class="space-y-3 border-2 border-blue-400 rounded-xl">
        <span class="inline-block text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </span>

        <h1 class="text-xl font-semibold text-gray-700 capitalize">
          Excelência Acadêmica
        </h1>

        <p class="text-gray-500">
          Os docentes do SmartBits são especialistas altamente qualificados nas
          disciplinas que lecionam. Cada professor traz uma vasta experiência e
          conhecimento em sua área de atuação, garantindo uma educação de alta
          qualidade para nossos alunos.
        </p>

        <a
          href="#"
          class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </article>

      <article class="space-y-3 border-2 border-blue-400 rounded-xl">
        <span class="inline-block text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            />
          </svg>
        </span>

        <h1 class="text-xl font-semibold text-gray-700 capitalize">
          Eventos e Atividades Escolares
        </h1>

        <p class="text-gray-500">
          A SMARTBITS tem realizado eventos escolares como palestras, apresentações de projetos, competições esportivas e culturais. 
          Essas experiências enriquecem a jornada educacional dos alunos e fortalecem os laços entre a comunidade escolar e as famílias.


        </p>

        <a
          href="#"
          class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </article>

      <article class="space-y-3 border-2 border-blue-400 rounded-xl">
        <span class="inline-block text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        </span>

        <h1 class="text-xl font-semibold text-gray-700 capitalize">
          Portal do Encarregado
        </h1>

        <p class="text-gray-500">
          Introduzimos um Portal do Encarregado que oferece acesso fácil e conveniente às informações acadêmicas e escolares de seus filhos.
          Através deste portal, os encarregados podem verificar notas, rendimento acadêmico, presença em aulas e comunicados importantes. 
        </p>

        <a
          href="#"
          class="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </a>
      </article>
    </div>
  </div>
</section>
<!-- CARDS DOS CURSOS -->
<Cards />
<!-- CURSOS -->
<Cursos />
<!-- QUADRO DE HONRA -->
<section class="bg-white ">
  <div class="h-[32rem] bg-gray-100 ">
      <div class="container px-6 py-10 mx-auto">
          <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">Quadro de honra trimestral</h1>

          <div class="flex justify-center mx-auto mt-6">
              <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
          </p>
      </div>
  </div>

  <div class="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
              <img class="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Etiene Domingos</h1>

              <p class="mt-2 text-gray-500 capitalize ">Média:</p>
              <span class="text-lg text-blue-500 font-semibold">18V</span>

              <div class="flex mt-3 -mx-2">
                <a href="#" class="mx-2 px-5 py-2 border border-gray-500 rounded-md text-gray-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                  Ver as notas 
               </a>
              </div>
          </div>

          <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
              <img class="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="">

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize ">María Odete</h1>

              <p class="mt-2 text-gray-500 capitalize ">Média:</p>
<span class="text-lg text-blue-500 font-semibold">18V</span>
              <div class="flex mt-3 -mx-2">
                  

        

                  <a href="#" class="mx-2 px-5 py-2 border border-gray-500 rounded-md text-gray-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                     Ver as notas 
                  </a>
              </div>
          </div>

          <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl ">
              <img class="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">

              <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Gildo Cabeto</h1>

              <p class="mt-2 text-gray-500 capitalize ">Média</p>
<span class="text-lg text-blue-500 font-semibold">18V</span>
              <div class="flex mt-3 -mx-2">
                  

        

                  <a href="#" class="mx-2 px-5 py-2 border border-gray-500 rounded-md text-gray-600 transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                     Ver as notas 
                  </a>
              </div>
          </div>
      </div>
  </div>
</section>
<!-- SECRETAÍA -->
<section class="bg-white">
  <div
    class="container flex flex-col items-center px-4 py-12 mx-auto text-center"
  >
    <h2 class="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl">
      Inscreva-se aqui, na secretaría digital da SMARTBITS.
    </h2>

    <p class="block max-w-4xl mt-4 text-gray-500">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iure
      tenetur commodi ipsam error voluptate magni. Adipisci repudiandae ullam
      commodi iusto reprehenderit suscipit facere voluptatem, eaque maiores
      minima. Neque, officiis.
    </p>

    <div class="mt-6">
      <a
        href="#"
        class="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
      >
        <svg
          class="w-5 h-5 mx-2 fill-current"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302c41.355,0,75,33.645,75,75V407z"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498C306.487,136.719,307.375,129.981,305.646,123.531z"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"
              ></path>
            </g>
          </g>
        </svg>

        <span class="mx-2"> Confirme a matrícula </span>
      </a>

      <a
        href="#"
        class="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        <svg
          class="w-5 h-5 mx-2 fill-current"
          viewBox="-28 0 512 512.00075"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"
          >
          </path>
        </svg>

        <span class="mx-2"> Inscreva-se na secretaría </span>
      </a>
    </div>
  </div>
</section>

<!-- Perguntas frequentes -->
<section class="bg-white px-5 ">
  <div class="container 2xl:px-96 md:px-32 py-10 mx-auto">
    <h1 class="text-2xl text-center font-semibold text-gray-800 lg:text-3xl">FAQ's</h1>

    {#each faqs  as {question, answer}}
  <Faq {question} {answer} />
{/each}

  </div>
</section>
<Testemunhas />

<section
  class="min-h-screen bg-cover"
  style="background-image: url('sala.jpg')"
>
  <div class="flex flex-col min-h-screen lg:px-20 bg-black/60">
    <div class="container flex flex-col flex-1 lg:px-6 px-4 py-12 mx-auto">
      <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
        <div class="text-white lg:w-1/2 lg:mx-6">
          <h1 class="text-2xl font-semibold capitalize lg:text-3xl">
            Entre em contacto
          </h1>

          <p class="max-w-xl mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            quo aliquid molestiae hic incidunt beatae placeat accusantium! Alias
            ex quisquam ab tempora. Ratione autem doloremque ducimus numquam
            doloribus, error sed.
          </p>

          <button
            class="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          >
            Contactar
          </button>

          <div class="mt-6 md:mt-8">
            <h3 class="text-gray-300">Nossas redes</h3>

            <div class="flex mt-4 -mx-1.5">
              <a
                class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                href="#"
              >
                <svg
                  class="w-10 h-10 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z"
                  />
                </svg>
              </a>

              <a
                class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                href="#"
              >
                <svg
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                href="#"
              >
                <svg
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                href="#"
              >
                <svg
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-8 lg:w-1/2 w-full lg:mx-6">
          <div
            class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl"
          >
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            
              <h1 class="text-xl font-medium text-gray-700">Horário de Funcionamento</h1>
  
          </div>
            <p class="mt-2 text-gray-500">
              Ask us everything and we would love to hear from you
            </p>

            <div class="mt-6 text-gray-500">
              <p>
                - Segunda a Sexta: 8h às 18h

              </p>
              <p>
                - Sábado: 9h às 13h

              </p>
            </div>
          <div class="flex mt-6 items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
            
            
              <h1 class="text-xl font-medium text-gray-700">Contactos</h1>
  
          </div>
            <p class="mt-2 text-gray-500">
              Ask us everything and we would love to hear from you
            </p>

            <div class="mt-6 text-gray-500">
              <p>
                - Telefone: (XX) XXXX-XXXX
               
                
              </p>
              <p>
                - E-mail: secretaria@smartbits.edu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
