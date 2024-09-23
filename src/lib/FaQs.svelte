<script>
  export let question;
  export let answer;
  export let isOpen = false;
  export function toggle() {
    isOpen = !isOpen;
  }
</script>


    <hr class="my-6 border-gray-200" />

    <div>
      <div>
        <!-- pergunta -->
        <button class="flex items-center focus:outline-none" on:click={toggle}>
          <svg
            class="flex-shrink-0 w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            ></path></svg
          >

          <h1 class="mx-4 text-xl text-gray-700">
            {question}
          </h1>
        </button>
        <!-- Resposta -->
        {#if isOpen}
          <div
            class="flex mt-8 md:mx-10 text-left transition-all duration-1000"
            class:answer
          >
            <span class="border border-blue-500"></span>

            <p class="max-w-3xl px-4 text-left text-gray-500">
              {answer}
            </p>
          </div>
        {/if}
      </div>


    </div>



