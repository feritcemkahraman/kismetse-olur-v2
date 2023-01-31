<template>
  <footer id="foot" class="bg-pink-100 shadow px-6 py-6">
    <div class="md:flex items-center justify-between">
      <a href="/" class="flex items-center justify-center md:justify-start">
        <img src="/img/logo-500.png" class="mr-15 h-20" alt="Kismetse Olur" />
      </a>
      <ul class="flex items-center justify-center md:items-end md:justify-end md:gap-12 mt-2 md:mt-0">
        <li>
          <router-link to="/kullanim-gizlilik" class="block py-2 px-5 text-black md:text-black text-sm md:p-0 focus:text-red-500 hover:scale-125 duration-200" aria-current="page">Kullanım Şartları ve Gizlilik Politikası</router-link>
        </li>
        <li>
          <router-link to="/basvurular" class="block py-2 pl-3 pr-4 text-black md:text-black text-sm md:p-0 focus:text-red-500 hover:scale-125 duration-200" aria-current="page">Aydınlatma Metni</router-link>
        </li>
        <li>
          <router-link to="/duyurular" class="block py-2 pl-3 pr-4 text-black md:text-black text-sm md:p-0 focus:text-red-500 hover:scale-125 duration-200" aria-current="page">Çerez Politikası</router-link>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-300 mx-auto md:my-8" />
    <span class="block text-xs md:text-sm text-gray-500 text-center">© 2023 Ferit Cem Kahraman | Kısmetse Olur v2 | All Rights Reserved.</span>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#foot {
  width: 100%;
}
</style>
