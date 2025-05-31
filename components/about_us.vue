<template>
    <section class="py-16 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
    <div class="flex flex-col lg:flex-row justify-between gap-8">
      
      <!-- Левая часть -->
      <div class="flex flex-col gap-6 w-full lg:w-[928px]">
        
        <!-- Блок "О нас" -->
        <div id="about" class="relative bg-white w-full h-[434px] p-6 md:p-10 rounded-xl">
          <!-- PNG линия -->
          <img
            src="/about-line.png"
            alt="line"
            class="absolute top-0 left-0 w-40 md:w-164 lg:w-172"
          />
          <h2 class="text-6xl md:text-7xl font-bold text-gray-800 mt-12 flex items-center justify-center">О нас</h2>
          <p class="text-3xl text-black my-8 font-black text-center">
            Наш проект предлагает инструменты и <br>  сервисы для комфортной работы и решения <br> различных задач
          </p>
        </div>

        <!-- Блок "ИИ" -->
        <div class="bg-[#858585] w-full h-[434px] p-6 md:p-10 rounded-[40px] shadow-sm">
          <h3 class="text-3xl font-semibold text-white mb-4">Искусственный интеллект</h3>
          <p class="text-white text-3xl">
            ИИ подберёт для вас подходящую команду для реализации вашего проекта в кратчайшие сроки
          </p>
        </div>
      </div>

      <!-- Правая часть -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[864px]">
        <div class=" w-full h-[434px] p-6 md:p-8 rounded-[40px] shadow-sm hover:shadow-md transition duration-300 bg-black">
          <h3 class="text-3xl font-semibold text-white mb-4">Консоль управления</h3>
          <p class="text-white text-[20px] font-black">Удобный инструмент <br> для управления ресурсами сайта</p>
        </div>

        <div class=" w-full h-[434px] p-6 md:p-8 rounded-[40px] shadow-sm hover:shadow-md transition duration-300 bg-[#0BC1BF]">
          <h3 class="text-3xl font-semibold text-white mb-4">Документация</h3>
          <p class="text-white text-[20px] font-black">Подробные описания, пошаговые руководства и примеры для работы</p>
        </div>

        <div class=" w-full h-[434px] p-6 md:p-8 rounded-[40px] shadow-sm hover:shadow-md transition duration-300 bg-[#0BC1BF]">
          <h3 class="text-3xl font-semibold text-white mb-4">Визуализация данных</h3>
          <p class="text-white text-[20px] font-black">Для лучшего понимания на каком этапе ваш проект на нашем сайте разработана понятная визуализация данных</p>
        </div>

        <div class=" w-full h-[434px] p-6 md:p-8 rounded-[40px] shadow-sm hover:shadow-md transition duration-300 bg-[#858585]">
          <h3 class="text-3xl font-semibold text-white mb-4">Мониторинг</h3>
          <p class="text-white text-[20px] font-black">Сервис для сбора, хранения и визуализации метрик</p>
        </div>
      </div>
    </div>
  </section>

   <section class="w-full flex justify-center px-8 mt-[150px]">
    <div class="max-w-[1856px] w-full grid grid-cols-3 gap-4">
      <!-- Маленький информационный блок -->
      <div class="col-span-1 bg-white rounded-[40px] p-8 flex flex-col justify-center text-center font-black">
        <h2 class="text-6xl mb-4r mb-[30px]">Проекты</h2>
        <p class="text-3xl">Наш сервис помогает <br> реализовать множество <br> проектов для различного <br> бизнеса</p>
      </div>

      <!-- Большой блок: Курсы по IT -->
      <div class="col-span-1 row-span-2 bg-gray-900 rounded-[40px] text-white p-8 relative h-[1080px]">
         <img src="/public/2.png" alt="InfoSec" class="w-full h-full object-cover absolute top-0 left-0 z-0 rounded-[40px]"/>
      </div>

      <!-- Маленький блок: Кибербезопасность -->
      <div class="col-span-1 bg-white rounded-[40px] overflow-hidden h-[540px] relative">
        <img src="/public/3.png" alt="InfoSec" class="w-full h-full object-cover absolute top-0 left-0 z-0" />
        <div class="absolute z-10 p-6 text-white">
        </div>
      </div>

      
      <!-- Большой блок: VR Club -->
      <div class="col-span-1 row-span-2 bg-black rounded-[40px] h-[1080px] p-8 text-white relative">
        <img src="/public/1.png" alt="InfoSec" class="w-full h-full object-cover absolute top-0 left-0 z-0 rounded-[40px]"/>
        <h3 class="text-4xl font-bold">VR Club</h3>
        <p class="mt-4 text-2xl">Погрузись в новые миры</p>
      </div>


      <!-- Большой блок: VR Club -->
      <div class="col-span-1 row-span-2 bg-black rounded-[40px] h-[1080px] p-8 text-white relative">
         <img src="/public/4.png" alt="InfoSec" class="w-full h-full object-cover absolute top-0 left-0 z-0 rounded-[40px]"/>
        <h3 class="text-4xl font-bold">VR Club</h3>
        <p class="mt-4 text-2xl">Погрузись в новые миры</p>
      </div>

      <!-- Пустой блок-заглушка -->
      <div class="col-span-1 bg-[#0BC1BF] rounded-[40px] h-[540px]"></div>
    </div>
  </section>

</template>