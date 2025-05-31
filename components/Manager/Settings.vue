<template>
  <div class="min-h-screen bg-white flex flex-col mt-[32px]">
    <!-- HEADER -->
    <header class="flex justify-between items-center h-[80px] px-8 border-b border-gray-300">
      <div class="text-2xl font-semibold border w-[328px] h-[82px] rounded-[40px] text-center flex items-center justify-center">Хочу проект</div>
      <button class="text-2xl font-semibold border w-[328px] h-[82px] rounded-[40px] text-center flex items-center justify-center ">Выйти</button>
    </header>

    <!-- MAIN CONTENT -->
    <div class="flex flex-grow px-8 py-8 gap-8">
      <!-- Sidebar -->
      <aside class="w-[204px] h-[1004px] rounded-[40px] border border-black p-4 flex flex-col gap-4">
        <button class="text-left hover:text-teal-500">Команды</button>
        <button class="text-left hover:text-teal-500">Проекты</button>
        <button class="text-left hover:text-teal-500">Заявки</button>
        <button class="text-left text-teal-500 font-medium">Настройки</button>
      </aside>

      <section class="w-[558px] h-[558px] rounded-[40px] border border-black p-6">
  <!-- Верхняя часть: аватар + имя и email -->
  <div class="flex items-center gap-4 mb-6">
    <img
      src="/profile.png"
      alt="Фото"
      class="w-[96px] h-[96px] rounded-full object-cover"
    />
    <div>
      <div class="text-[32px] font-bold">Анна</div>
      <div class="text-gray-500 text-2xl">yourname@gmail.com</div>
    </div>
  </div>
      <div class="flex justify-between border-b border-gray-200 pb-2 h-[40px] items-center">
      </div>

  <!-- Поля профиля -->
  <div class="space-y-4">
    <div class="flex justify-between border-b border-gray-200 pb-2 h-[80px] items-center">
      <label class="text-2xl text-gray-900 font-medium">Имя</label>
      <div class="text-2xl font-medium text-[#858585]">Анна</div>
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
  <div class="mt-6 flex justify-center">
    <button class="px-6 py-2 bg-[#0BC1BF] text-white rounded-full">
      Сохранить
    </button>
  </div>
</section>

      <!-- Placeholder for additional content -->
      <section class="w-[1000px] h-[1004px] rounded-[40px] border border-black"></section>
    </div>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>