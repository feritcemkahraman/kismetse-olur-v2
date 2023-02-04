<template>
  <div id="cont" class="container text-white font-bold mt-16 p-5 mx-auto mb-16">
    <h1 class="text-3xl font-extrabold mb-3 mt-3 md:mb-2 md:mt-24 text-center text-black">İletişim</h1>
    <section class="md:py-6 md:mt-44 -800 text-gray-50">
      <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div class="text-center md:text-left py-6 md:py-0 md:px-6">
          <h1 class="text-4xl font-bold mb-2">Bize Ulaşın</h1>
          <p class="pt-2 pb-4">Bilgilerinizi girerek bizimle iletişime geçebilirsiniz.</p>
        </div>
        <form novalidate="false" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
          <label class="block">
            <span class="mb-1">Full name</span>
            <input type="text" class="block w-full rounded-md p-2 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-white text-black" />
          </label>
          <label class="block">
            <span class="mb-1">Email address</span>
            <input type="email" class="block w-full p-2 bg-white rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 -800 text-black" />
          </label>
          <label class="block">
            <span class="mb-1">Message</span>
            <textarea rows="3" class="block w-full p-2 bg-white rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 -800 text-black"></textarea>
          </label>
          <button type="button" class="self-center px-8 py-3 text-lg rounded-lg focus:ring hover:ring focus:ring-opacity-75 bg-pink-600 text-white focus:ring-pink-500 hover:ring-pink-600 duration-200">Submit</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#cont {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15.5px);
  -webkit-backdrop-filter: blur(15.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 66vh;
}
</style>
