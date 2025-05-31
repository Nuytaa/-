<template>
  <div class="min-h-screen flex flex-col bg-[#F9F9F9] text-black">
    <!-- Хедер -->
    <header class="flex justify-between items-center p-4 border-b">
      <div class="text-xl font-semibold">iTeam</div>
      <NuxtLink to="/" class="text-red-500 hover:underline">Выйти</NuxtLink>
    </header>

    <!-- Основной контент -->
    <div class="flex flex-1">
      <!-- Боковое меню -->
      <aside class="w-60 border-r px-4 py-8 space-y-4">
        <NuxtLink
          to="/manager/teams"
          class="block hover:text-[#0BC1BF] transition-colors"
        >
          Команды
        </NuxtLink>
        <NuxtLink
          to="/manager/projects"
          class="block hover:text-[#0BC1BF] transition-colors"
        >
          Проекты
        </NuxtLink>
        <NuxtLink
          to="/manager/requests"
          class="block hover:text-[#0BC1BF] transition-colors"
        >
          Заявки
        </NuxtLink>
        <NuxtLink
          to="/manager/settings"
          class="block text-[#0BC1BF] font-medium"
        >
          Настройки
        </NuxtLink>
      </aside>

      <!-- Контент страницы -->
      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>

    <!-- Футер -->
    <footer class="bg-black text-white py-6 text-center rounded-t-3xl mt-8">
      <div class="text-3xl font-bold">iTeam PROJECT</div>
      <div class="text-sm mt-2">Хакатон 2025 • Политика конфиденциальности</div>
    </footer>
  </div>
</template>