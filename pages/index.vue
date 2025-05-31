<template>
  <title>Хочу проект</title>
  <!-- <main class="min-h-screen flex flex-col items-center font-sans"> -->

    <Header />
    <Main />
    <projects_memory />
    <about_us />
    <team_card />
    <Call_to_action />
    <Footer />

    <Modal ref="Modal" /> 
    
    <button @click="$refs.Modal.mode = 'login'; $refs.Modal.show = true">Открыть Вход</button>
    <button @click="$refs.Modal.mode = 'register'; $refs.Modal.show = true">Открыть Регистрацию</button>
    <button @click="$refs.Modal.mode = 'forgot'; $refs.Modal.show = true">Открыть Восстановление</button>



    <!-- <authorization /> -->
    
  <!-- <main> -->
</template>

<script setup>
import Call_to_action from '~/components/call_to_action.vue';

// const cards = [
//   {
//     title: 'Консоль управления',
//     text: 'Удобный инструмент для управления ресурсами сайта'
//   },
//   {
//     title: 'Документация',
//     text: 'Подробное описание, пошаговые руководства и примеры для работы'
//   },
//   {
//     title: 'Визуализация данных',
//     text: 'Понятная визуализация данных о ходе реализации проекта'
//   },
//   {
//     title: 'Мониторинг',
//     text: 'Сервис для сбора, хранения и визуализации метрик'
//   }
// ]
</script>


<style>
:root {
  --primary-color: #0BC1BF;
  --secondary-color: #323130;
  --light-gray: #D9D9D9;
}


.bg-lightGray {
  background-color: var(--light-gray);
}
</style>