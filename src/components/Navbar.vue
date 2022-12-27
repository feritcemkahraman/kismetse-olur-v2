<template>
  <nav class="bg-pink-100 px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <img
          src="/img/logo-500.png"
          class="h-14 mr-3 sm:h-20"
          alt="Kısmetse Olur"
        />
      </a>
      <div class="flex md:order-2">
        <button
          type="button"
          class="text-white bg-pink-600 hover:bg-pink-400 transition duration-600 font-medium rounded-lg text-md px-8 py-2.5 text-center mr-3 md:mr-0"
        >
          Başvur
        </button>
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col p-4 mt-4 md:flex-row md:space-x-24 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-pink-100"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pl-3 pr-4 text-black md:text-black text-lg md:p-0 focus:text-red-500 hover:scale-125 duration-200"
              aria-current="page"
              >Anasayfa</router-link
            >
          </li>
          <li>
            <router-link
              to="/basvurular"
              class="block py-2 pl-3 pr-4 text-black md:text-black text-lg md:p-0 focus:text-red-500 hover:scale-125 duration-200"
              aria-current="page"
              >Başvurular</router-link
            >
          </li>
          <li>
            <router-link
              to="/duyurular"
              class="block py-2 pl-3 pr-4 text-black md:text-black text-lg md:p-0 focus:text-red-500 hover:scale-125 duration-200"
              aria-current="page"
              >Duyurular</router-link
            >
          </li>
          <li>
            <router-link
              to="/iletisim"
              class="block py-2 pl-3 pr-4 text-black md:text-black text-lg md:p-0 focus:text-red-500 hover:scale-125 duration-200"
              aria-current="page"
              >İletişim</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
// set the target element that will be collapsed or expanded (eg. navbar menu)
const targetEl = document.getElementById("targetEl");

// optionally set a trigger element (eg. a button, hamburger icon)
const triggerEl = document.getElementById("triggerEl");
</script>

<style></style>
