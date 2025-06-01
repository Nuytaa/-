> Nuyta:
<template>
  <div class="mt-[32px] mb-[32px]">
         <header class="flex justify-between items-center h-[80px] px-8 border-b border-gray-300">
            <div class="text-2xl font-semibold border w-[328px] h-[82px] rounded-[40px] text-center flex items-center justify-center">Хочу проект</div>
            <NuxtLink to="/">
              <button class="text-2xl font-semibold border w-[328px] h-[82px] rounded-[40px] text-center flex items-center justify-center">Выйти</button>
            </NuxtLink>
        </header>  
    </div>

  <div class="flex min-h-screen p-4">
      <!-- Левая панель -->
        <aside class="w-[204px] h-[1004px] rounded-[40px] bg-white p-6 text-[32px] font-normal flex flex-col gap-6 border">
        <NuxtLink to="/user/progects_user" class="text-[#0BC1BF]  cursor-pointer">Проекты</NuxtLink>
        <NuxtLink to="/user/settings_user" class="cursor-pointer">Настройки</NuxtLink>
        </aside>

    <!-- Контент -->
    <main class="flex-1 p-6 space-y-6 overflow-auto">
      <!-- Верхний блок -->
      <div class="flex justify-between items-start gap-6">
        <!-- Карточка заявки -->
        <div class="bg-white p-6 rounded-4xl shadow-md w-[709px] h-[639px] border flex flex-col justify-between">
          <h2 class="text-3xl font-semibold mb-4 pt-[40px]">Заявка #1001</h2>
          <div class="space-y-2 text-2xl">
            <div class="flex justify-between h-[82px]">
              <span class="text-gray-500">Тип проекта</span>
              <span class="font-medium">Корпоративный сайт</span>
            </div>
            <div class="flex justify-between h-[82px]">
              <span class="text-gray-500">Срок выполнения</span>
              <span class="font-medium text-[#0BC1BF]">от 01.06.2025 до 29.07.2025</span>
            </div>
            <div class="flex justify-between h-[82px]">
              <span class="text-gray-500">Статус</span>
              <span class="font-medium">На рассмотрении</span>
            </div>
            <div class="flex justify-between h-[82px]">
              <span class="text-gray-500">Номер телефона</span>
              <span class="text-gray-400">Add number</span>
            </div>
          </div>
          <button @click="showModal = true" class="mt-4 bg-[#0BC1BF] text-white px-4 py-2 rounded-full w-[367px] h-[56px] text-2xl font-bold">
            Связаться с менеджером
          </button>
        </div>

         <!-- Модальное окно -->
            <div
            v-if="showModal"
            class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
            >
            <div class="bg-white p-6 rounded-2xl shadow-lg w-[320px] relative">
                <button
                @click="showModal = false"
                class="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                &times;
                </button>
                <h3 class="text-lg font-semibold mb-2">Контакт менеджера</h3>
                <p class="text-gray-700 text-base">+7 (999) 123-45-67</p>
            </div>
            </div>

        <!-- Карточка бюджета -->
<div class="bg-white p-6 rounded-4xl shadow-md w-[879px] h-[639px] border flex flex-col justify-between">

  <!-- Верхняя часть: заголовок и легенда справа -->
  <div class="flex justify-between items-start">
    <!-- Левая часть: текст -->
    <div>
       <h2 class="text-[#858585] font-black mb-2.5"><span class="text-6xl mb-2 pt-[32px] text-black">Бюджет</span> рассчитывается специалистом</h2>
          <p class="text-base mb-4 font-black"><span class="text-[#0BC1BF]">на 5% эффективнее </span> по сравнению с прошлой неделей</p>

      <!-- Стрелки и 1 неделя -->
      <div class="flex items-center gap-3 mt-4">
        <img src="/str1.png" alt="←" class="w-13 h-4" />
        <span class="text-sm text-gray-500">1 неделя</span>
        <img src="/str2.png" alt="→" class="w-13 h-4" />
    </div>
    </div>

    <!-- Правая часть: легенда в столбик -->
    <div class="flex flex-col gap-2 mt-5 font-black text-base">
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-full bg-[#BC0000]"></span> Design
      </div>
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-full bg-[#F86807]"></span> Frontend
      </div>
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-full bg-[#4D45E7]"></span> Backend
      </div>
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 rounded-full bg-[#13094E]"></span> Дополнительно
      </div>
    </div>
  </div>

        <!-- График -->
        <div class="flex justify-between items-end h-[386px] mt-6">
            <div
            v-for="day in ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']"
            :key="day"
            class="flex flex-col items-center font-black text-2xl"
            >
            <div class="h-[336px] w-[50px] bg-gradient-to-t from-blue-500 via-orange-500 to-red-500 rounded-full"></div>
            <span class="text-sm mt-2">{{ day }}</span>
            </div>
        </div>
        </div>
      </div>

      <!-- Команда -->
      <div class="bg-white p-6 rounded-2xl shadow-md border">
        <h2 class="text-xl font-semibold mb-2">Команда</h2>
        <p class="text-sm text-gray-500 mb-6">Здесь будет отображаться команда, которая работает над вашим проектом</p>

        <div class="grid grid-cols-3 gap-6">
          <div v-for="member in team" :key="member.name" class="flex items-center gap-4">
            <img :src="member.photo" class="w-16 h-16 rounded-full object-cover" />
            <div class="text-sm">
              <h3 class="font-semibold">{{ member.role }}</h3>
              <p class="text-gray-500">{{ member.stack }}</p>
              <p class="text-gray-400">{{ member.exp }}</p>
              <NuxtLink to="#" class="text-[#0BC1BF] underline text-sm">Подробнее →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <Footer />
</template>

<script setup>

import { ref } from 'vue'

const showModal = ref(false)

const team = [
  {
    role: 'Designer',
    stack: 'Figma, Photoshop, Illustrator',
    exp: '3 года на рынке',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    role: 'Frontend',
    stack: 'HTML, CSS, JavaScript',
    exp: '6 лет на рынке',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    role: 'Frontend',
    stack: 'HTML, CSS, JavaScript',
    exp: '10 лет на рынке',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    role: 'Backend',
    stack: 'Node.js (Express), PostgreSQL',
    exp: '6 лет на рынке',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    role: 'Backend',
    stack: 'Node.js (Express), PostgreSQL',
    exp: '5 лет на рынке',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    role: 'Backend',
    stack: 'Node.js (Express), PostgreSQL',
    exp: '7 лет на рынке',
    photo: 'https://randomuser.me/api/portraits/men/6.jpg'
  },
]
</script>
