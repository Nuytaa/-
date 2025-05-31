> Nuyta:
<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.9)]"
    @click.self="show = false"
  >
    <!-- Левый блок -->
    <transition name="fade-slide-left">
      <div
        v-if="leftVisible"
        class="w-[599px] h-[645px] bg-white rounded-[40px] flex flex-col items-center justify-center p-8 text-center shadow-xl"
      >
        <img src="/public/logo.png" alt="Logo" class="w-40 mb-4" />
        <h2 class="text-3xl font-black text-black mb-4">
          {{
            mode === 'login'
              ? 'Войдите в аккаунт'
              : mode === 'register'
              ? 'Зарегистрируйтесь'
              : 'Восстановление пароля'
          }}
        </h2>
        <p class="text-[20px] font-black text-black mt-4">
          {{
            mode === 'register' || mode === 'login'
              ? 'Регистрация позволит вам и нашему менеджеру держать связь и узнавать обо всех этапах разработки быстрее'
              : 'Введите email, который вы использовали при регистрации, и мы вышлем ссылку для восстановления'
          }}
        </p>
      </div>
    </transition>

    <!-- Правый блок -->
    <transition name="fade-slide-right">
      <div
        v-if="rightVisible"
        class="w-[599px] h-[645px] bg-white rounded-[40px] flex flex-col justify-center p-13 shadow-xl ml-[32px] relative"
      >
        <button
          @click="show = false"
          class="absolute top-6 right-6 text-3xl font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <!-- Регистрация -->
        <div v-if="mode === 'register'" class="flex flex-col items-center">
          <h2 class="text-3xl font-black mb-2 text-black">Регистрация</h2>
          <p class="text-[20px] font-black mb-6 text-black">Введите логин и пароль в форме ниже</p>

          <InputField label="Имя пользователя*" placeholder="Имя пользователя" />
          <PasswordField label="Пароль*" />
          <PasswordField label="Повторите пароль*" />
          <InputField label="E-mail*" placeholder="Введите E-mail" />

          <p class="text-sm text-black mt-4 mb-4 text-center px-4">
            Нажимая кнопку «Зарегистрироваться» вы даёте согласие на <span class="text-[#0BC1BF]">обработку своих персональных данных</span>
          </p>

          <button class="bg-[#0BC1BF] text-white font-bold py-2 rounded-full w-[403px] h-[56px] text-[20px]">
            Зарегистрироваться
          </button>

          <p class="text-sm text-black mt-4">
            Уже есть аккаунт?
            <a href="#" @click.prevent="mode = 'login'" class="text-[#0BC1BF] font-medium">Войти</a>
          </p>
        </div>

        <!-- Вход -->
        <div v-else-if="mode === 'login'" class="flex flex-col items-center">
          <h2 class="text-3xl font-black mb-2 text-black">Вход</h2>
          <p class="text-[20px] font-black mb-6 text-black">Введите логин и пароль</p>

          <InputField label="Имя" placeholder="Введите имя пользователя" />
          <PasswordField label="Пароль*" />

          <a href="#" @click.prevent="mode = 'forgot'" class="text-sm text-gray-600 underline mb-6 inline-block">
            Восстановить пароль
          </a>

          <button class="bg-[#0BC1BF] text-white font-bold py-2 rounded-full w-[403px] h-[56px] text-[20px]">
            Войти
          </button>

          <p class="text-sm text-black mt-4">
            Нет аккаунта?
            <a href="#" @click.prevent="mode = 'register'" class="text-[#0BC1BF] font-medium">Зарегистрироваться</a>
          </p>
        </div>

        <!-- Восстановление пароля -->
        <div v-else-if="mode === 'forgot'" class="flex flex-col items-center">
          <h2 class="text-3xl font-black mb-2 text-black">Восстановление пароля</h2>
          <p class="text-[20px] font-black mb-6 text-black">Введите email в форме ниже</p>

          <InputField label="E-mail*" placeholder="Введите E-mail" />

          <button class="bg-[#0BC1BF] text-white font-bold py-2 rounded-full w-[403px] h-[56px] text-[20px]">
            Восстановить
          </button>

> Nuyta:
<p class="text-sm text-black mt-4">
            Вспомнили пароль?
            <a href="#" @click.prevent="mode = 'login'" class="text-[#0BC1BF] font-medium">Войти</a>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import InputField from './InputField.vue'
import PasswordField from './Password.vue'

const show = ref(false)
const leftVisible = ref(false)
const rightVisible = ref(false)
const mode = ref('register') // 'login' | 'register' | 'forgot'

watchEffect(() => {
  if (show.value) {
    setTimeout(() => (leftVisible.value = true), 100)
    setTimeout(() => (rightVisible.value = true), 500)
  } else {
    leftVisible.value = false
    rightVisible.value = false
  }
})

defineExpose({ show, mode }) // Можно менять режим извне
</script>

<style scoped>
.fade-slide-left-enter-active,
.fade-slide-right-enter-active {
  transition: all 1s ease;
}
.fade-slide-left-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.fade-slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.fade-slide-right-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.fade-slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
