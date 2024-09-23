<script>
    let Navbar = false
    function OpenNavbar(){
        Navbar = !Navbar
    }
</script>

<!-- btn navbar -->
<button class="lg:hidden flex" on:click={OpenNavbar}>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    class="bi bi-list"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    />
  </svg>
  </button>
  <!-- LINKS -->

<nav  class="lg:flex gap-x-5 flex flex-col  items-end  ease-in-out lg:flex-row    lg:h-auto h-screen lg:static fixed left-0 p-5 -top-full lg:w-auto w-full" class:Navbar>
    <div class="flex w-4/5 lg:flex-row z-20 flex-col items-end rounded-md bg-white lg:mt-0 lg:p-0 px-5 pt-5 lg:gap-5 gap-5 shadow lg:shadow-none">
      <button class="lg:hidden flex" on:click={OpenNavbar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        
      </button>
        <a href="./" class="text-md font-semibold w-full" on:click={OpenNavbar}>HOME</a>
        <a href="./sobre" class="text-md font-semibold w-full" on:click={OpenNavbar}>SOBRE</a>
        <a href="./secretaria" class="text-md font-semibold w-full" on:click={OpenNavbar}>SECRETARÍA</a>
        <a href="./termos" class="text-md font-semibold w-full" on:click={OpenNavbar}>TERMOS</a>
        <div class="lg:hidden mt-5 border-t border-t-gray-300 flex py-3 w-full items-center">
          <a href="./login" class="rounded-md bg-white border-2 border-white w-full py-2 text-gray-700 font-semibold" on:click={OpenNavbar}>Login</a>
          <a href="./sign-in" class="border-2 lg:border-castanho-100 border-gray-200 w-full text-center lg:text-castanho-100 text-gray-700 lg:px-5 lg:py-2  py-2 px-3 rounded-md" on:click={OpenNavbar}>Cadastra-se</a>
         </div>
        </div>
        <div class="backdrop-blur-sm bg-black/15 w-full h-full absolute top-0 left-0 lg:hidden flex" on:click={OpenNavbar}></div>

</nav>