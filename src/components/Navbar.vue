<template>
  <div class="navbar bg-pink-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-secondary lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-8 p-2 shadow bg-pink-400 rounded-box w-52">
          <li>
            <router-link to="/" class="block py-2 pl-3 pr-4 text-black md:text-black text-lg font-bold md:p-0 focus:text-red-500 duration-200" aria-current="page">Anasayfa</router-link>
          </li>
          <li>
            <router-link to="/duyurular" class="block py-2 pl-3 pr-4 text-black md:text-black text-lg font-bold md:p-0 focus:text-red-500 duration-200" aria-current="page">Duyurular</router-link>
          </li>
          <li>
            <router-link to="/iletisim" class="block py-2 pl-3 pr-4 text-black md:text-black text-lg font-bold md:p-0 focus:text-red-500 duration-200" aria-current="page">İletişim</router-link>
          </li>
        </ul>
      </div>
      <a href="/" class="flex items-center md:ml-4">
        <img src="/img/logo-500.png" class="h-16 my-2 ml-20 md:my-0 md:h-20 md:ml-0" alt="Kısmetse Olur" />
      </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal lg:pl-12 lg:gap-20">
        <li>
          <router-link to="/" class="block py-2 pl-3 pr-4 text-black md:text-black text-lg font-bold md:p-0 focus:text-red-500 hover:scale-125 duration-200 hover:bg-transparent focus:bg-pink-100" aria-current="page">Anasayfa</router-link>
        </li>
        <li>
          <router-link to="/duyurular" class="block py-2 pl-3 pr-4 text-black md:text-black text-lg font-bold md:p-0 focus:text-red-500 hover:scale-125 hover:bg-transparent focus:bg-pink-100 duration-200" aria-current="page">Duyurular</router-link>
        </li>
        <li>
          <router-link to="/iletisim" class="block py-2 pl-3 pr-4 text-black md:text-black text-lg font-bold md:p-0 focus:text-red-500 hover:scale-125 hover:bg-transparent focus:bg-pink-100 duration-200" aria-current="page">İletişim</router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end md:pr-48">
      <button type="button" class="text-white text-center bg-pink-600 hover:bg-pink-500 transition duration-200 font-bold rounded-lg text-sm px-5 py-2.5 md:text-md md:px-8 md:py-2.5 md:ml-3">Başvur</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
