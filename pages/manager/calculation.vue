<template>

    <div class="mt-[32px] mb-[32px]">
         <header class="flex justify-between items-center h-[80px] px-8 border-b border-gray-300">
            <div class="text-2xl font-semibold border w-[328px] h-[82px] rounded-[40px] text-center flex items-center justify-center">Хочу проект</div>
            <NuxtLink to="/">
              <button class="text-2xl font-semibold border w-[328px] h-[82px] rounded-[40px] text-center flex items-center justify-center">Выйти</button>
            </NuxtLink>
        </header>  
    </div>
    
  <div class="p-6 space-y-6">
    <!-- Карточка заявки -->
    <div class="bg-white p-6 rounded-3xl shadow w-[460px] border">
      <h2 class="font-bold mb-4">Заявка #1001</h2>
      <div class="text-sm text-gray-500 space-y-2">
        <div class="flex justify-between">
          <span>Тип проекта</span>
          <span class="text-black">Корпоративный сайт</span>
        </div>
        <div class="flex justify-between">
          <span>Срок выполнения</span>
          <span class="text-[#0BC1BF] underline">от 01.06.2025 до 29.07.2025</span>
        </div>
        <div class="flex justify-between">
          <span>Описание проекта</span>
          <span class="text-gray-400 underline cursor-pointer">Add description</span>
        </div>
      </div>
      <button class="mt-6 px-4 py-2 bg-[#0BC1BF] text-white rounded-full">Связаться с пользователем</button>
    </div>

    <!-- Расчёт трудоёмкости -->
    <div class="bg-white p-6 rounded-3xl shadow border w-full max-w-[960px]">
      <div class="flex gap-4 items-center mb-4 flex-wrap">
        <select class="border rounded px-2 py-1 text-sm w-28">
          <option>Organic</option>
          <option>Semidetached</option>
          <option>Embedded</option>
        </select>
        <input class="border rounded px-2 py-1 text-sm w-28" placeholder="Команда" />
        <input class="border rounded px-2 py-1 text-sm w-28" placeholder="0001" />
        <span class="text-sm">тыс. строк кода</span>
      </div>

      <div class="flex justify-between text-center text-sm font-bold mb-4">
        <div>Человеко-месяцев<br />0</div>
        <div>Месяцев<br />0</div>
        <div>Персонала<br />0</div>
      </div>

      <div class="mb-4">
        <select class="border rounded px-4 py-2 text-sm w-full">
          <option>Таблица коэффициентов</option>
        </select>
      </div>

      <div class="flex justify-between text-center text-sm font-bold mb-4">
        <div>Трудоёмкость чел/мес<br />0</div>
        <div>Стоимость<br />0</div>
      </div>

      <table class="w-full text-center text-sm">
        <thead>
          <tr class="border-b">
            <th class="text-left">Фактор</th>
            <th>Очень низкий</th>
            <th>Низкий</th>
            <th>Средний</th>
            <th>Высокий</th>
            <th>Очень высокий</th>
            <th>Критический</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(factor, i) in factors" :key="i" class="border-b">
            <td class="text-left py-2">{{ factor.name }}</td>
            <td v-for="(val, idx) in factor.values" :key="idx">
              <input type="radio" :name="'factor' + i" class="accent-[#0BC1BF]" />
              <div class="text-xs text-gray-500">{{ val }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const factors = [
  { name: 'Объем работ', values: [0.75, 0.88, 1, 1.15, 1.40, 1.65] },
  { name: 'Требования к проекту', values: [0.8, 0.9, 1, 1.1, 1.2, 1.3] },
  { name: 'Сложность продукта', values: [0.7, 0.85, 1, 1.15, 1.3, 1.5] },
  { name: 'Сроки выполнения', values: [0.9, 0.95, 1, 1.1, 1.25, 1.4] },
  { name: 'Опыт специалистов', values: [0.8, 0.9, 1, 1.1, 1.25, 1.4] },
  { name: 'Ресурсы / время', values: [0.7, 0.85, 1, 1.1, 1.25, 1.5] }
];
</script>

<style scoped>
input[type='radio'] {
  margin-top: 4px;
}