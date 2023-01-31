<template>
  <div class="flex justify-center items-center mt-56 mb-64 md:mt-64 md:mb-64">
    <div class="card shadow-xl mx-7 md:mx-0">
      <figure class="px-10 pt-9 md:pt-10">
        <img src="/img/logo-500.png" alt="Kısmetse Olur Logo" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h1 class="card-title mb-12 text-white">Kısmetse Olur Başvuru Formu</h1>
        <div class="card-actions">
          <button class="btn btn-primary px-32 mb-2 text-lg bg-pink-600 hover:bg-pink-500 border-none normal-case">Başvur</button>
        </div>
        <div class="card-actions mb-2">
          <router-link :to="{ path: '/aydinlatma-metni' }" target="_blank"><button class="btn btn-primary px-4 border-l text-lg bg-pink-600 hover:bg-pink-500 border-none normal-case">Yarışmacı Adayı Aydınlatma Metni</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
