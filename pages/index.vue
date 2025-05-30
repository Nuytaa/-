<template>
  <main class="min-h-screen flex flex-col items-center bg-white font-sans">
    <!-- Навигация -->
    <header class=" w-[1856px] h-[82px] mx-auto flex flex-col justify-between rounded-[40px]">
      <nav class="container max-w-[1920px] mx-auto flex justify-between items-center py-4 px-2 relative">
        <div class="text-3xl font-black bg-[#D9D9D9] text-[#858585] w-[162px] h-[82px] flex items-center justify-center rounded-[40px]">iTeam</div>

        <!-- Десктоп меню -->
        <ul class="md:flex space-x-20 text-[#858585] text-3xl w-[1317px] h-[82px] flex items-center justify-center rounded-[40px] bg-[#D9D9D9]">
          <li><a href="#about" class="hover:text-black">О нас</a></li>
          <li><a href="#" class="hover:text-black">Команды</a></li>
          <li class="font-black">Хочу проект</li>
          <li><a href="#" class="hover:text-black">Проекты</a></li>
          <li><a href="#" class="hover:text-black">Контакты</a></li>
        </ul>

        <!-- Десктоп  -->
        <div class="md:flex space-x-8 text-[#858585] text-3xl w-[313px] h-[82px] flex items-center justify-center rounded-[40px] bg-[#D9D9D9]">
          <a href="#" class="text-gray-600 hover:text-black">Вход \ Регистрация</a>
        </div>

        <!-- Бургер меню -->
        <button @click="toggleMenu" class="md:hidden text-3xl">
          <span v-if="!menuOpen">&#9776;</span>
          <span v-else>&times;</span>
        </button>

        <!-- Мобильная менюшка -->
        <div v-if="menuOpen" class="absolute top-full left-0  bg-[#D9D9D9] w-[1317px] h-[82px] shadow-md md:hidden z-50">
          <ul class="flex flex-col text-gray-600 p-4 space-y-4">
            <li><a href="#about" class="hover:text-black">О нас</a></li>
            <li><a href="#" class="hover:text-black">Команды</a></li>
            <li><a href="#" class="hover:text-black">Проекты</a></li>
            <li><a href="#" class="hover:text-black">Контакты</a></li>
            <li><a href="#" class="text-gray-600 hover:text-black">Вход / Регистрация</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Главный блок -->
    <section class="flex justify-start items-center w-full mt-10">
      <div class="bg-[#D9D9D9] w-[1856px] h-[900px] mx-auto flex flex-col justify-center pl-[100px] rounded-[40px]">
        <h1 class="text-[120px] font-black text-[#858585] max-w-[1200px] tracking-tightest">
          Ваши идеи — <br /> наши решения
        </h1>
        <p class="text-3xl text-[#FFFFFF] mt-4 max-w-[972px] font-black">
          Отправьте заявку на создание программного обеспечения, <br /> и мы воплотим ваши идеи в жизнь
        </p>
        <div class="flex flex-col sm:flex-row gap-6 mt-8">
          <button class="bg-[#858585] text-white font-semibold hover:bg-gray-900 transition w-[470px] h-[109px] text-3xl rounded-[40px]">
            Хочу проект
          </button>
          <button class="border-3 border-gray-700 text-[#858585] font-semibold hover:bg-gray-100 transition w-[470px] h-[109px] text-3xl rounded-[40px]">
            Регистрация
          </button>
        </div>
      </div>
    </section>

    <!-- Блок с проектами -->
    <section class="container max-w-[1920px] mx-auto py-20 px-6 text-center font-black">
      <h2 class="text-4xl font-bold text-[#858585] mb-4">
        Проекты, о которых ты всегда мечтал
      </h2>
      <p class="text-lg text-[#858585] mb-8">
        Поделитесь своей идеей, и мы разработаем программное <br /> обеспечение, которое решит ваши задачи
      </p>
      <button class="bg-gray-700 text-white rounded-2xl hover:bg-gray-900 transition w-[470px] h-[109px] text-2xl">
        Хочу проект
      </button>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>