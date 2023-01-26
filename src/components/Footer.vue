<template>
  <footer
    class="bg-pink-100 fixed bottom-0 left-0 right-0 shadow md:px-6 md:py-8"
  >
    <div class="sm:flex sm:items-center sm:justify-between">
      <a href="/" class="flex items-center mb-4 sm:mb-0">
        <img src="/img/logo-500.png" class="mr-15 h-20" alt="Kismetse Olur" />
      </a>
      <ul class="flex flex-wrap items-center mb-6 gap-12 sm:mb-0">
        <li>
          <router-link
            to="/kullanim-gizlilik"
            class="block py-2 pl-3 pr-4 text-black md:text-black text-sm md:p-0 focus:text-red-500 hover:scale-125 duration-200"
            aria-current="page"
            >Kullanım Şartları ve Gizlilik Politikası</router-link
          >
        </li>
        <li>
          <router-link
            to="/basvurular"
            class="block py-2 pl-3 pr-4 text-black md:text-black text-sm md:p-0 focus:text-red-500 hover:scale-125 duration-200"
            aria-current="page"
            >Aydınlatma Metni</router-link
          >
        </li>
        <li>
          <router-link
            to="/duyurular"
            class="block py-2 pl-3 pr-4 text-black md:text-black text-sm md:p-0 focus:text-red-500 hover:scale-125 duration-200"
            aria-current="page"
            >Çerez Politikası</router-link
          >
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-300 sm:mx-auto lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2023 Ferit Cem Kahraman | Kısmetse Olur v2 | All Rights Reserved.
    </span>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
