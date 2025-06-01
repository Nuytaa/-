<template>
  <div class="min-h-screen bg-white flex flex-col mt-[32px]">
  
    <header class="flex justify-between items-center h-[80px] px-8 border-b border-gray-300">
      <button
        class="flex items-center gap-2 w-[250px] h-[60px] px-4 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition bg-white"
      >
        <!-- Аватар -->
        <img
          src="/profile.png"
          alt="avatar"
          class="w-[32px] h-[32px] rounded-full object-cover"
        />

        <!-- Фамилия Имя -->
        <span class="text-black text-base font-medium">Егорова Алла</span>

        <!-- Иконка стрелки -->
        <svg
          class="w-4 h-4 text-gray-600 ml-auto"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </header>


    <div class="flex flex-grow px-8 py-8 gap-8">
       <!-- Левая панель -->
        <aside class="w-[204px] h-[1004px] rounded-[40px] bg-white p-6 text-[32px] font-normal flex flex-col gap-6 border">
        <NuxtLink to="/user/projects_user" class="cursor-pointer">Проекты</NuxtLink>
        <NuxtLink to="/user/settings_user" class="text-[#0BC1BF] cursor-pointer">Настройки</NuxtLink>
        </aside>

        <section class="w-[592px] h-[850px] rounded-[40px] border border-black p-6">
        <!-- Верхняя часть: аватар + имя и email -->
        <div class="flex items-center gap-4 mb-6">
            <img
            src="/profile.png"
            alt="Фото"
            class="w-[96px] h-[96px] rounded-full object-cover"
            />
            <div>
            <div class="text-[32px] font-bold">Алла</div>
            <div class="text-gray-500 text-2xl">yourname@gmail.com</div>
            </div>
        </div>
      <div class="flex justify-between border-b border-gray-200 pb-2 h-[40px] items-center">
    </div>

  <!-- Поля профиля -->
  <div class="space-y-4 ">
        <div class="flex justify-between border-b border-gray-200 pb-2 h-[80px] items-center">
            <label class="text-2xl text-gray-900 font-medium">Имя</label>
            <div class="text-2xl font-medium text-[#858585]">Алла</div>
        </div>

        <div class="flex justify-between border-b border-gray-200 pb-2 h-[80px] items-center">
            <label class="text-2xl text-gray-900 font-medium">Фамилия</label>
            <div class="text-2xl font-medium text-[#858585]">Егорова</div>
        </div>

        <div class="flex justify-between border-b border-gray-200 pb-2 h-[80px] items-center">
            <label class="text-2xl text-gray-900 font-medium">Отчество</label>
            <div class="text-2xl font-medium text-[#858585]">Александровна</div>
        </div>

        <div class="flex justify-between border-b border-gray-200 pb-2 h-[80px] items-center">
            <label class="text-2xl text-gray-900 font-medium">Имя пользователя</label>
            <div class="text-2xl font-medium text-[#858585]">youram</div>
        </div>

        <div class="flex justify-between border-b border-gray-200 pb-2 h-[80px] items-center">
            <label class="text-2xl text-gray-900 font-medium">Email</label>
            <div class="text-2xl font-medium text-[#858585]">yourname@gmail.com</div>
        </div>

        <div class="flex justify-between border-b border-gray-200 pb-2 h-[80px] items-center">
            <label class="text-2xl text-gray-900 font-medium">Номер телефона</label>
            <div class="text-2xl text-[#858585]">Add number</div>
        </div>
  </div>

  <!-- Кнопка -->
  <div class="mt-6 flex justify-leftr">
    <button class="px-6 py-2 bg-[#0BC1BF] text-white rounded-full">
      Сохранить
    </button>
  </div>
</section>


      <section class="w-[1000px] h-[1004px] rounded-[40px] border border-black"></section>
    </div>


    <Footer />
  </div>
</template>