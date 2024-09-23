<section class="bg-white">
  <div class="flex justify-center min-h-screen relative">
    <img
      src="./screen.jpg"
      alt=""
      class="hidden object-cover fixed left-0 lg:block lg:w-2/5 h-screen"
    />

    <div
      class="flex lg:absolute lg:top-20 lg:right-0 items-center w-full max-w-5xl overflow-scroll overflow-x-hidden overflow-y-auto p-8 mx-auto lg:px-12 lg:w-3/5"
    >
      <div class="w-full mt-16 lg:0">
        <h1
          class="text-2xl font-semibold tracking-wider text-gray-800 capitalize"
        >
          formulário de inscrição.
        </h1>

        <p class="mt-4 text-gray-500">
          Só para aqueles que não fazem parte da instituição
        </p>

        <div class="mt-6">
          <h1 class="text-gray-900">Dados do aluno:</h1>
        </div>

        <form class="flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-6 mt-8 ">
          <div>
            <label class="block mb-2 text-sm text-gray-600">Primeiro nome</label
            >
            <input
              type="text"
              placeholder="John"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600"
              >Segundo e último nome</label
            >
            <input
              type="text"
              placeholder="Snow"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label for="Birthday" class="block text-sm text-gray-500"
              >Birthday</label
            >

            <input
              type="date"
              placeholder="John Doe"
              class="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600">Número do BI</label>
            <input
              type="text"
              placeholder="XXX-XX-XXXX-XXX"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div class="">
            <label class="block mb-2 text-sm text-gray-600">Gênero:</label>
            <select
              name="Genero"
              id=""
              class="py-4 w-full px-5 rounded-lg bg-slate-100 text-gray-700"
            >
              <option value="" aria-disabled="true"></option>
              <option value="max" class="text-gray-700"> Masculino </option>
              <option value="femi" class="text-gray-700"> Feminino </option>
            </select>
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600">Nome do pai:</label>
            <input
              type="text"
              placeholder="John"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600">Nome da mãe:</label>
            <input
              type="text"
              placeholder="Snow"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600"
              >Número do telefone <span class="text-red-500">º</span
              >Móvel</label
            >
            <input
              type="text"
              placeholder="XXX-XX-XXXX-XXX"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600"
              >Número do telefone: <span class="text-red-500">º</span
              >Fixo</label
            >
            <input
              type="text"
              placeholder="XXX-XX-XXXX-XXX"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="johnsnow@example.com"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>




          <div class="mt-6 col-span-2">
            <h1 class="text-gray-900">
              Dados do responsável pela educação e pagamento das propinas:
            </h1>
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600"
              >Nome completo:</label
            >
            <input
              type="text"
              placeholder="John"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600">Profissão:</label>
            <input
              type="text"
              placeholder="John"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600"
              >Local de trabalho:</label
            >
            <input
              type="text"
              placeholder="John"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600"
              >Número do telefone <span class="text-red-500">º</span
              >Móvel</label
            >
            <input
              type="text"
              placeholder="XXX-XX-XXXX-XXX"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600"
              >Número do telefone: <span class="text-red-500">º</span
              >Fixo</label
            >
            <input
              type="text"
              placeholder="XXX-XX-XXXX-XXX"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="johnsnow@example.com"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div class="mt-6 col-span-2">
            <h1 class="text-gray-900">
              Dados do ano lectivo actual:
            </h1>
          </div>
         
          <div class="">
            <label class="block mb-2 text-sm text-gray-600">Classe que irá frequentar:</label>
            <select
              name="Classe"
              id=""
              class="py-4 w-full px-5 rounded-lg bg-slate-100 text-gray-700"
            >
              <option value="" aria-disabled="true"></option>
              <option value="decima" class="text-gray-700"> 10ª </option>
              <option value="decima-pri" class="text-gray-700"> 11ª </option>
              <option value="decima-seg" class="text-gray-700"> 12ª </option>
              <option value="decima-terc" class="text-gray-700"> 13ª </option>

            </select>
          </div>
          <div class="">
            <label class="block mb-2 text-sm text-gray-600">Curso:</label>
            <select
              name="Curso"
              id=""
              class="py-4 w-full px-5 rounded-lg bg-slate-100 text-gray-700"
            >
              <option value="" aria-disabled="true"></option>
              <option value="informatica" class="text-gray-700"> Informática </option>
              <option value="electronica" class="text-gray-700"> Electrónica e telecomunicações </option>


            </select>
          </div>
          <div class="">
            <label class="block mb-2 text-sm text-gray-600">Periodo:</label>
            <select
              name="Curso"
              id=""
              class="py-4 w-full px-5 rounded-lg bg-slate-100 text-gray-700"
            >
              <option value="" aria-disabled="true"></option>
              <option value="informatica" class="text-gray-700"> Manhã </option>
              <option value="electronica" class="text-gray-700"> Tarde </option>


            </select>
          </div>
          <button
          class="flex items-center col-span-2 self-start w-auto justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-azul-300 rounded-lg hover:bg-azul-300/90 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          <span>Concluído </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 rtl:-scale-x-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        </form>
      </div>
    </div>
  </div>
</section>
