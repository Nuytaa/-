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
      <NuxtLink to="/manager/teams" class="text-[#0BC1BF] cursor-pointer">Команды</NuxtLink>
      <NuxtLink to="#" class="cursor-pointer">Проекты</NuxtLink>
      <NuxtLink to="/manager/requests" class="cursor-pointer">Заявки</NuxtLink >
      <NuxtLink to="/manager/settings" class="cursor-pointer">Настройки</NuxtLink>
    </aside>

    <!-- Основной контент -->
    <div class="ml-8 flex-1">
      <!-- Верхнее меню -->
      <div class="flex gap-[28px] mb-8">
        <select class="w-[281px] h-[80px] rounded-[40px] border px-4 text-2xl">
          <option>HTML</option>
          <option>CSS</option>
          <option>SCSS</option>
          <option>Bootstrap</option>
          <option>Tailwind</option>
          <option>JavaScript</option>
          <option>React</option>
           <option>Vue</option>
           <option>Tilda</option>
          <option>WordPress</option>
          <option>Figma</option>
          <option>Python</option>
          <option>Laravel</option>
        </select>
        <select class="w-[281px] h-[80px] rounded-[40px] border px-4 text-2xl">
          <option>Frontend</option>
          <option>Backend</option>
          <option>FullStack</option>
          <option>Designer</option>
          <option>Analysts</option>
          <option>Project Manager</option>
          <option>Tester</option>
        </select>
        <div class="flex gap-4">
          <input type="text" placeholder="От" class="w-[140px] h-[80px] border px-4 rounded-[40px] text-2xl" />
          <input type="text" placeholder="До" class="w-[140px] h-[80px] border px-4 rounded-[40px] text-2xl" />
        </div>
        <select class="w-[281px] h-[80px] rounded-[40px] border px-4 text-2xl">
          <option>Свободен</option>
          <option>Занят</option>
        </select>
        <button class="w-[281px] h-[80px] bg-[#0BC1BF] text-white rounded-[40px] text-2xl">Поиск</button>
      </div>

      <!-- Таблица -->
      <div class="w-[1620px] h-[661px] bg-white rounded-[40px] p-4 shadow-md overflow-auto border">
        <table class="w-full table-auto text-left">
          <thead>
            <tr class="border-b text-2xl">
              <div class="p-4 w-[24px] h-[56px]"></div>
              <th>ФИО</th>
              <th class="w-[187px]">Статус</th>
              <th class="w-[217px]">Специализация</th>
              <th class="w-[106px]">Опыт</th>
              <th class="w-[230px]">Стек</th>
              <th class="w-[180px]">Ставка / час</th>
              <th class="w-[109px]">Action</th>
            </tr>
          </thead>
          <tbody class="text-2xl text-normal">
            <tr v-for="(user, index) in users" :key="index" class="border-b h-[75px]">
              <td class="p-4"><input type="checkbox" class="w-[24px] h-[24px]" /></td>
              <td class="flex items-center gap-4 text-2xl pt-[15px]">
                <img :src="user.avatar" class="w-[40px] h-[40px] object-cover" />
                {{ user.name }}
              </td>
              <td>
                <span
                  :class="statusClass(user.status)"
                  class="px-4 py-1 rounded-[4px] text-sm inline-block text-center border"
                >
                  {{ user.status }}
                </span>
              </td>
              <td>{{ user.specialization }}</td>
              <td>{{ user.experience }}</td>
              <td>{{ user.stack }}</td>
              <td>{{ user.rate }}</td>
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
    name: 'Иванов Аркадий Ильич',
    status: 'Свободен',
    specialization: 'frontend',
    experience: '1 год',
    stack: 'html, css, js, bootstrap',
    rate: '1500 руб',
    avatar: '/avatar1.png',
  },
  {
    name: 'Кошелева Анна Павловна',
    status: 'Занят',
    specialization: 'frontend',
    experience: '3 года',
    stack: 'html, css, nuxt.js',
    rate: '2000 руб',
    avatar: '/avatar2.png',
  },
  {
    name: 'Чустов Евгений Александрович',
    status: 'Свободен',
    specialization: 'machine learning',
    experience: '9 лет',
    stack: 'pyTorch, keras, tensorFlow',
    rate: '3100 руб',
    avatar: '/avatar1.png',
  },
  {
    name: 'Шматко Дмитрий Иванович',
    status: 'Занят',
    specialization: 'backend',
    experience: '3 года',
    stack: 'html, scss, react',
    rate: '1500 руб',
    avatar: '/avatar2.png',
  },
  {
    name: 'Стрельцов Виктор Иванович',
    status: 'Занят',
    specialization: 'frontend',
    experience: '7 лет',
    stack: 'html, tailwind, nuxt.js',
    rate: '2500 руб',
    avatar: '/avatar1.png',
  },
  {
    name: 'Белкина Наталья Викторовна',
    status: 'Занят',
    specialization: 'designer',
    experience: '1 год',
    stack: 'figma, photoshop, illustrator',
    rate: '1000 руб',
    avatar: '/avatar2.png',
  },
  

]

const statusClass = (status) => {
  switch (status) {
    case 'Свободен':
      return 'border-[#7FC008] text-[#7FC008]'
    case 'Занят':
      return 'border-[#DB303F] text-[#DB303F]'
    case 'Pending':
      return 'border-[#DB8C28] text-[#DB8C28]'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}
</script>

