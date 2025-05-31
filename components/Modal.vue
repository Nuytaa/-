<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <!-- Левый блок -->
    <transition name="fade-slide-left">
      <div
        v-if="leftVisible"
        class="w-[599px] h-[645px] bg-white rounded-[40px] flex flex-col items-center justify-center p-8 text-center shadow-xl"
      >
        <img src="/public/logo.png" alt="Logo" class="w-24 mb-4" />
        <h2 class="text-3xl font-black text-black mb-4">Войдите в аккаунт</h2>
        <p class="text-[20px] font-black text-black">
          Перед тем, как мы примем у вас заявку необходимо войти<br />
          в личный кабинет. Это позволит вам и нашему менеджеру<br />
          держать связь и узнавать обо всех этапах<br />
          разработки быстрее
        </p>
      </div>
    </transition>

    <!-- Правый блок -->
    <transition name="fade-slide-right">
      <div v-if="rightVisible" class="w-[599px] h-[645px] bg-white rounded-[40px] flex flex-col justify-center p-13 shadow-xl ml-[32px]">
 
        <h2 class="text-3xl font-black mb-2 text-black">Войдите в аккаунт</h2>
        <p class="text-[20px] font-black mb-6 text-black">Введите логин и пароль в форме ниже</p>

        <label class="text-sm font-bold text-black text-left mb-1 ml-[50px]">Имя</label>
        <input
          type="text"
          placeholder="Введите имя пользователя"
          class="rounded-full border px-4 py-2 pr-10 text-[#858585] w-[403px] h-[56px] text-[16px] mb-4 ml-10"
        />

        <label class="text-sm font-bold mb-1 text-black text-left ml-[50px]">Пароль*</label>
        <div class="relative mb-2">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Пароль"
            class="rounded-full border px-4 py-2 pr-10 text-[#858585] w-[403px] h-[56px] text-[16px]"
          />
          <button
            @click="showPassword = !showPassword"
            type="button"
            class="absolute right-3 top-2.5"
          >
            <EyeIcon :open="showPassword" />
          </button>
        </div>

        <a href="#" class="text-sm text-gray-600 underline mb-6 inline-block">Восстановить пароль</a>

        <button class="bg-[#0BC1BF] text-white font-bold py-2 rounded-full  w-[403px] h-[56px] text-[20px] ml-10">Войти</button>

        <p class="text-sm text-black mt-4">
          Нет аккаунта?
          <a href="#" class="text-[#0BC1BF] font-medium">Зарегистрироваться</a>
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const show = ref(false)
const leftVisible = ref(false)
const rightVisible = ref(false)
const showPassword = ref(false)

watchEffect(() => {
  if (show.value) {
    setTimeout(() => {
      leftVisible.value = true
    }, 100)

    setTimeout(() => {
      rightVisible.value = true
    }, 500)
  } else {
    leftVisible.value = false
    rightVisible.value = false
  }
})

defineExpose({ show })
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