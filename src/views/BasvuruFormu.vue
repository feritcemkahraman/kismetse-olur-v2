<template>
  <div id="cont" class="container text-white font-bold mt-16 p-5 mb-16 md:mx-auto">
    <h1 class="text-3xl mb-12 text-center text-black">Kısmetse Olur Başvuru Formu</h1>
    <div class="mt-1 mb-1 flex justify-center items-center text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Adınız</span>
        <input type="text" name="name" class="mt-1 px-3 py-2 w-96 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      </label>
    </div>
    <div class="mt-1 mb-1 flex justify-center items-center text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Soyadınız</span>
        <input type="text" name="surname" class="mt-1 px-3 py-2 w-96 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      </label>
    </div>
    <div class="mt-1 mb-1 flex justify-center items-center text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Adresiniz</span>
        <textarea rows="4" name="adress" class="mt-1 px-3 py-2 w-96 max-h-60 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      </label>
    </div>
    <div class="mt-2 mb-1 ml-7 md:flex md:items-center md:justify-center md:ml-9 md:mr-64 text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Yaşadığınız Şehir</span>
        <select class="form-select mt-1 p-1 bg-white rounded-md shadow-md focus:outline-none border focus:border-purple-600" id="sehir" name="Şehir" required="">
          <option value="0" selected="">Seçiniz</option>
          <option value="Adana">Adana</option>
          <option value="Adıyaman">Adıyaman</option>
          <option value="Afyon">Afyon</option>
          <option value="Ağrı">Ağrı</option>
          <option value="Aksaray">Aksaray</option>
          <option value="Amasya">Amasya</option>
          <option value="Ankara">Ankara</option>
          <option value="Antalya">Antalya</option>
          <option value="Ardahan">Ardahan</option>
          <option value="Artvin">Artvin</option>
          <option value="Aydın">Aydın</option>
          <option value="Balıkesir">Balıkesir</option>
          <option value="Bartın">Bartın</option>
          <option value="Batman">Batman</option>
          <option value="Bayburt">Bayburt</option>
          <option value="Bilecik">Bilecik</option>
          <option value="Bingöl">Bingöl</option>
          <option value="Bitlis">Bitlis</option>
          <option value="Bolu">Bolu</option>
          <option value="Burdur">Burdur</option>
          <option value="Bursa">Bursa</option>
          <option value="Çanakkale">Çanakkale</option>
          <option value="Çankırı">Çankırı</option>
          <option value="Çorum">Çorum</option>
          <option value="Denizli">Denizli</option>
          <option value="Diyarbakır">Diyarbakır</option>
          <option value="Düzce">Düzce</option>
          <option value="Edirne">Edirne</option>
          <option value="Elazığ">Elazığ</option>
          <option value="Erzincan">Erzincan</option>
          <option value="Erzurum">Erzurum</option>
          <option value="Eskişehir">Eskişehir</option>
          <option value="Gaziantep">Gaziantep</option>
          <option value="Giresun">Giresun</option>
          <option value="Gümüşhane">Gümüşhane</option>
          <option value="Hakkari">Hakkari</option>
          <option value="Hatay">Hatay</option>
          <option value="Iğdır">Iğdır</option>
          <option value="Isparta">Isparta</option>
          <option value="Mersin">İçel(Mersin)</option>
          <option value="İstanbul-Anadolu">İstanbul-Anadolu</option>
          <option value="İstanbul-Avrupa">İstanbul-Avrupa</option>
          <option value="İzmir">İzmir</option>
          <option value="Karabük">Karabük</option>
          <option value="Karaman">Karaman</option>
          <option value="Kars">Kars</option>
          <option value="Kastamonu">Kastamonu</option>
          <option value="Kayseri">Kayseri</option>
          <option value="Kırıkkale">Kırıkkale</option>
          <option value="Kırklareli">Kırklareli</option>
          <option value="Kırşehir">Kırşehir</option>
          <option value="Kilis">Kilis</option>
          <option value="Kocaeli">Kocaeli</option>
          <option value="Konya">Konya</option>
          <option value="Kütahya">Kütahya</option>
          <option value="Malatya">Malatya</option>
          <option value="Manisa">Manisa</option>
          <option value="Kahramanmaraş">Kahramanmaraş</option>
          <option value="Mardin">Mardin</option>
          <option value="Muğla">Muğla</option>
          <option value="Muş">Muş</option>
          <option value="Nevşehir">Nevşehir</option>
          <option value="Niğde">Niğde</option>
          <option value="Ordu">Ordu</option>
          <option value="Osmaniye">Osmaniye</option>
          <option value="Rize">Rize</option>
          <option value="Sakarya">Sakarya</option>
          <option value="Samsun">Samsun</option>
          <option value="Siirt">Siirt</option>
          <option value="Sinop">Sinop</option>
          <option value="Sivas">Sivas</option>
          <option value="Şırnak">Şırnak</option>
          <option value="Tekirdağ">Tekirdağ</option>
          <option value="Tokat">Tokat</option>
          <option value="Trabzon">Trabzon</option>
          <option value="Tunceli">Tunceli</option>
          <option value="Şanlıurfa">Şanlıurfa</option>
          <option value="Uşak">Uşak</option>
          <option value="Van">Van</option>
          <option value="Yalova">Yalova</option>
          <option value="Yozgat">Yozgat</option>
          <option value="Zonguldak">Zonguldak</option>
          <option value="Yurtdışı">Yurtdışı</option>
        </select>
      </label>
    </div>
    <div class="mt-1 mb-1 flex justify-center items-center text-black">
      <label class="block">
        <span class="block text-md text-black font-bold">Ev/İş Telefonunuz</span>
        <input type="text" name="surname" class="mt-1 px-3 py-2 w-96 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      </label>
    </div>
    <div class="mt-1 mb-1 flex justify-center items-center text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Cep Telefonunuz</span>
        <input type="text" name="surname" class="mt-1 px-3 py-2 w-96 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      </label>
    </div>
    <div class="md:flex md:items-center md:justify-center md:mr-72">
      <div class="w-32 ml-7 text-black font-bold">
        <div class="form-control">
          <span class="block text-md md:ml-1 text-black font-bold">Cinsiyetiniz</span>
          <label class="label cursor-pointer">
            <span class="text-black font-bold">Erkek</span>
            <input type="radio" name="radio-10" class="radio ring-2 ring-slate-900 checked:bg-red-500" checked />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="text-black font-bold">Kadın</span>
            <input type="radio" name="radio-10" class="radio ring-2 ring-slate-900 checked:bg-pink-500" />
          </label>
        </div>
      </div>
    </div>
    <div class="mt-1 mb-1 grid mr-52 justify-center items-center text-black">
      <label for="date" class="mb-1">Doğum Tarihiniz</label>
      <input type="date" class="bg-white w-44 pl-5 pb-1 rounded-lg shadow-md text-center" id="date" name="Tarih" placeholder="" required="" />
    </div>
    <div class="mt-1 mb-1 flex justify-center items-center text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Sosyal Medya Hesaplarınız</span>
        <textarea rows="4" name="adress" class="mt-1 px-3 py-2 w-96 max-h-60 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      </label>
    </div>
    <div class="mt-2 mb-1 ml-7 md:flex md:items-center md:justify-center md:ml-6 md:mr-72 text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Göz Renginiz</span>
        <select class="form-select mt-1 p-1 bg-white rounded-md shadow-md focus:outline-none border focus:border-purple-600" id="eyecolor" name="Göz Rengi" required="">
          <option selected="">Seçiniz</option>
          <option value="Ela">Ela</option>
          <option value="Gri">Gri</option>
          <option value="Kahverengi">Kahverengi</option>
          <option value="Mavi">Mavi</option>
          <option value="Yeşil">Yeşil</option>
          <option value="Siyah">Siyah</option>
        </select>
      </label>
    </div>
    <div class="mt-2 mb-1 ml-7 md:flex md:items-center md:justify-center md:ml-6 md:mr-72 text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Saç Renginiz</span>
        <select class="form-select mt-1 p-1 bg-white rounded-md shadow-md focus:outline-none border focus:border-purple-600" id="haircolor" name="Saç Rengi" required="">
          <option selected="">Seçiniz</option>
          <option value="Beyaz">Beyaz</option>
          <option value="Kumral">Kumral</option>
          <option value="Kahve">Kahverengi</option>
          <option value="Kızıl">Kızıl</option>
          <option value="Sarı">Sarı</option>
          <option value="Siyah">Siyah</option>
        </select>
      </label>
    </div>
    <div class="mt-1 mb-1 flex justify-center items-center text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Boyunuz</span>
        <input type="text" name="surname" class="mt-1 px-3 py-2 w-96 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      </label>
    </div>
    <div class="mt-1 mb-1 flex justify-center items-center text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Kilonuz</span>
        <input type="text" name="surname" class="mt-1 px-3 py-2 w-96 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" />
      </label>
    </div>
    <div class="md:flex md:items-center md:justify-center mt-3 md:mr-72">
      <div class="w-32 ml-7 text-black font-bold">
        <div class="form-control">
          <span class="text-md md:ml-1 text-black font-bold">Medeni Durumunuz</span>
          <label class="label cursor-pointer">
            <span class="text-black font-bold">Evli</span>
            <input type="radio" name="radio-10" class="radio ring-2 ring-slate-900 checked:bg-red-500" checked />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="text-black font-bold">Bekar</span>
            <input type="radio" name="radio-10" class="radio ring-2 ring-slate-900 checked:bg-pink-500" />
          </label>
        </div>
      </div>
    </div>
    <div class="mt-2 mb-1 ml-7 md:flex md:items-center md:justify-center md:ml-2 md:mr-56 text-black">
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-black font-bold">Öğrenim Durumunuz</span>
        <select class="form-select mt-1 p-1 w-28 bg-white rounded-md shadow-md focus:outline-none border focus:border-purple-600" id="school" name="Öğrenim Durumunuz" required="">
          <option selected="">Seçiniz</option>
          <option value="İlköğretim">İlk Öğretim</option>
          <option value="Lise">Lise ve Dengi</option>
          <option value="Önlisans">Önlisans</option>
          <option value="Lisans">Lisans</option>
          <option value="Lisansüstü">Lisansüstü</option>
        </select>
      </label>
    </div>
    <div class="md:flex md:items-center md:justify-center mt-3 md:mr-72">
      <div class="w-32 ml-7 text-black font-bold">
        <span class="text-md ml-7 md:ml-1 text-black font-bold">Daha Önce Bir Yarışma Programına Katıldınız Mı?</span>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="text-black font-bold">Evet</span>
            <input type="radio" name="radio-10" class="radio ring-2 ring-slate-900 checked:bg-red-500" checked />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="text-black font-bold">Hayır</span>
            <input type="radio" name="radio-10" class="radio ring-2 ring-slate-900 checked:bg-pink-500" />
          </label>
        </div>
      </div>
    </div>
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
  /* height: 66vh; */
}
</style>
