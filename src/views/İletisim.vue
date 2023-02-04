<template>
  <div id="cont" class="container text-white font-bold mt-16 p-5 mx-auto mb-16">
    <h1 class="text-3xl mb-2 mt-24 text-center text-black">İletişim</h1>
    <section class="py-6 mt-44 -800 text-gray-50">
      <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div class="py-6 md:py-0 md:px-6">
          <h1 class="text-4xl font-bold">Bize Ulaşın</h1>
          <p class="pt-2 pb-4">Bilgilerinizi girerek bizimle iletişime geçebilirsiniz.</p>
          <div class="space-y-4">
            <p class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              <span>Fake address, 9999 City</span>
            </p>
            <p class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+0123456789</span>
            </p>
            <p class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>iletisim@iletisim.com</span>
            </p>
          </div>
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
          <button type="button" class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-400 text-gray-900 focus:ring-violet-400 hover:ring-violet-400 duration-200">Submit</button>
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
