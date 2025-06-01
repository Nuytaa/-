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
      <NuxtLink to="/user/projects_user" class="cursor-pointer text-[#0BC1BF]">Проекты</NuxtLink>
      <NuxtLink href="/user/settings_user" class="cursor-pointer">Настройки</NuxtLink>
    </aside>

    <!-- Основной контент -->
    <div class="ml-8 flex-1">
      <!-- Верхнее меню -->
      <div class="flex gap-[28px] mb-8">
        <select class="w-[281px] h-[80px] rounded-[40px] border px-4 text-2xl">
          <option>001</option>
        </select>
        <select class="w-[281px] h-[80px] rounded-[40px] border px-4 text-2xl">
    
          <option>ФИО</option>
        </select>
        <div class="flex gap-4">
          <input type="text" placeholder="От" class="w-[140px] h-[80px] border px-4 rounded-[40px] text-2xl" />
          <input type="text" placeholder="До" class="w-[140px] h-[80px] border px-4 rounded-[40px] text-2xl" />
        </div>
        <select class="w-[281px] h-[80px] rounded-[40px] border px-4 text-2xl">
          <option>Тип проекта</option>
          <option>Корпоративный сайт</option>
          <option>Лендинг</option>
          <option>Мобильное приложение</option>
          <option>Сайт-игра</option>
          <option>Сайт-агрегатор</option>
        </select>
        <button class="w-[281px] h-[80px] bg-[#0BC1BF] text-white rounded-[40px] text-2xl">Поиск</button>
      </div>

      <!-- Таблица -->
      <div class="w-[1620px] h-[661px] bg-white rounded-[40px] p-10 shadow-md overflow-auto border">
        <table class="w-full table-auto text-left">
          <thead>
            <tr class="border-b text-2xl">
              <th class="w-[217px] pb-[20px]">Номер заявки</th>
              <th class="w-[517px] pb-[20px]">ФИО</th>
              <th class="w-[365px] pb-[20px]">Тип проекта</th>
              <th class="w-[351px] pb-[20px]">Срок выполнения</th>
              <th class="w-[106px] pb-[20px]">Action</th>
            </tr>
          </thead>
          <tbody class="text-2xl text-normal">
            <tr v-for="(user, index) in users" :key="index" class="border-b h-[75px]">
              <td>{{ user.number }}</td>
              <td class="text-[#0BC1BF] underline">{{ user.full_name }}</td>
              <td>{{ user.project_type }}</td>
              <td>{{ user.completion_date }}</td>
              <td class="text-[#B0BAC9] text-2xl">...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Пагинация -->
      <div class="flex justify-between items-center mt-6 w-[1620px]">
        <div class="flex items-center gap-2">
          <button class="border rounded-[10px] px-3 py-1 bg-white">←</button>
          <span class="text-[#0BC1BF] border rounded-[10px] px-3 py-1 bg-white">1</span>
          <span>/</span>
          <span>16</span>
          <button class="border rounded-[10px] px-3 py-1 bg-white text-[#0BC1BF]">→</button>
        </div>
        <div class="flex items-center gap-2 text-2xl font-black">
          <label>Строчек на странице</label>
          <select class="border rounded-[10px] px-2 py-1 w-[95px] h-[50px] text-[#0BC1BF]">
            <option>15</option>
            <option>30</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
const users = [
  {
    number: '#1001',
    full_name: 'Миронова Наталья Алексадровна',
    project_type: 'Корпоративный сайт',
    completion_date: 'от 01.06.2025 до 29.07.2025',
  },
]

</script>

