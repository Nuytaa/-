<template>
     <div class="mt-[32px] mb-[32px]">
         <header class="flex justify-between items-center h-[80px] px-8 border-b border-gray-300">
            <div class="text-2xl font-semibold border w-[328px] h-[82px] rounded-[40px] text-center flex items-center justify-center">Хочу проект</div>
            <button class="text-2xl font-semibold border w-[328px] h-[82px] rounded-[40px] text-center flex items-center justify-center">Выйти</button>
        </header>  
     </div>

  <div class="flex min-h-screen p-4">
    <!-- Левая панель -->
    <aside class="w-[204px] h-[1004px] rounded-[40px] bg-white p-6 text-[32px] font-normal flex flex-col gap-6 border">
      <span class="text-[#0BC1BF] cursor-pointer">Команды</span>
      <span class="cursor-pointer">Проекты</span>
      <span class="cursor-pointer">Заявки</span>
      <span class="cursor-pointer">Настройки</span>
    </aside>

    <!-- Основной контент -->
    <div class="ml-8 flex-1">
      <!-- Верхнее меню -->
      <div class="flex gap-[28px] mb-8">
        <select class="w-[315px] h-[80px] rounded-[40px] border px-4 text-lg">
          <option>Html</option>
        </select>
        <select class="w-[315px] h-[80px] rounded-[40px] border px-4 text-lg">
          <option>Frontend</option>
        </select>
        <div class="flex gap-4">
          <input type="text" placeholder="От" class="w-[140px] h-[80px] border px-4 rounded-[40px] text-lg" />
          <input type="text" placeholder="До" class="w-[140px] h-[80px] border px-4 rounded-[40px] text-lg" />
        </div>
        <select class="w-[315px] h-[80px] rounded-[12px] border px-4 text-lg">
          <option>Свободен</option>
        </select>
        <button class="w-[315px] h-[80px] bg-[#0BC1BF] text-white rounded-[40px] text-lg">Поиск</button>
      </div>

      <!-- Таблица -->
      <div class="w-[1620px] h-[661px] bg-white rounded-[40px] p-4 shadow-md overflow-auto">
        <table class="w-full table-auto text-left">
          <thead>
            <tr class="border-b">
              <th class="p-4"><input type="checkbox" class="w-[24px] h-[24px]" /></th>
              <th>ФИО</th>
              <th class="w-[187px]">Статус</th>
              <th class="w-[217px]">Специализация</th>
              <th class="w-[106px]">Опыт</th>
              <th class="w-[230px]">Стек</th>
              <th class="w-[180px]">Ставка / час</th>
              <th class="w-[109px]">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index" class="border-b h-[56px]">
              <td class="p-4"><input type="checkbox" class="w-[24px] h-[24px]" /></td>
              <td class="flex items-center gap-4">
                <img :src="user.avatar" class="w-[40px] h-[40px] rounded-full object-cover" />
                {{ user.name }}
              </td>
              <td>
                <span
                  :class="statusClass(user.status)"
                  class="px-4 py-1 rounded-full text-sm inline-block text-center"
                >
                  {{ user.status }}
                </span>
              </td>
              <td>{{ user.specialization }}</td>
              <td>{{ user.experience }}</td>
              <td>{{ user.stack }}</td>
              <td>{{ user.rate }}</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Пагинация -->
      <div class="flex justify-between items-center mt-6 w-[1620px]">
        <div class="flex items-center gap-2">
          <button class="border rounded-full px-3 py-1 bg-white">←</button>
          <span>1</span>
          <span>/</span>
          <span>16</span>
          <button class="border rounded-full px-3 py-1 bg-white">→</button>
        </div>
        <div class="flex items-center gap-2">
          <label>Строчек на странице</label>
          <select class="border rounded px-2 py-1">
            <option>15</option>
            <option>30</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const users = [
  {
    name: 'Иванов Аркадий Ильич',
    status: 'Active',
    specialization: 'frontend',
    experience: '1 год',
    stack: 'html, css, js',
    rate: '1500 руб',
    avatar: 'https://placekitten.com/40/40',
  },
  {
    name: 'Кошелева Анна Павловна',
    status: 'Danger',
    specialization: 'frontend',
    experience: '3 года',
    stack: 'html, css, nuxt.js',
    rate: '2000 руб',
    avatar: 'https://placekitten.com/41/40',
  },
  // Добавь другие записи по аналогии
]

const statusClass = (status) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-700'
    case 'Danger':
      return 'bg-red-100 text-red-700'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}
</script>

