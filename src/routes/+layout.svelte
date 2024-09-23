<script>
  import "../app.css";
  import Logo from "$lib/Logo.svelte";
  import Navbar from "$lib/Navbar.svelte"
</script>

<header class="w-full h-16 flex items-center fixed bg-white z-30 lg:justify-around justify-between px-6 shadow-md">
  <!-- Logotipo -->
  <a href="./gay" class="flex items-center space-x-3">
    <Logo />
    <span class="font-semibold text-sm">SMARTBITS</span>
  </a>
  <!-- Navbar-->
   <Navbar />
   <!-- BTN-NAVBAR -->

   <div class="lg:flex hidden gap-8 items-center">
    <a href="./login">Login</a>
    <a href="./sign-in" class="border-2 border-castanho-200 text-castanho-200 px-5 py-2 rounded-md">Cadastra-se</a>
   </div>
</header>
<slot></slot>

