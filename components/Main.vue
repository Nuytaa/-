
<template>
  <section class="w-full flex justify-left items-left px-8">
    <!-- Левая часть -->
    <div class="bg-[#000000] w-full max-w-[1163px] h-[600px] md:h-[900px] flex flex-col justify-center px-8 md:px-[100px] rounded-[40px]">
      <h1 class="text-4xl sm:text-6xl md:text-[120px] font-black tracking-tight text-white mt-[200px]">
        Ваши идеи — <br />наши решения
      </h1>
      <p class="text-base sm:text-xl md:text-3xl text-white mt-4 max-w-[972px] font-bold">
        Отправьте заявку на создание программного обеспечения, <br /> и мы воплотим ваши идеи в жизнь
      </p>
      <div class="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8">
        <button
          @click="modalRef.show = true"
          class="mt-8 bg-[#0BC1BF] text-white font-semibold hover:bg-black transition w-full sm:w-[300px] md:w-[470px] h-[60px] md:h-[109px] text-xl md:text-3xl rounded-[40px]"
        >
         <Modal ref="modalRef" />
          Хочу проект
        </button>
        <button
          @click="mode = 'register'"
          class="mt-8 border-3 border-white text-white font-semibold hover:bg-white hover:text-black transition w-full sm:w-[300px] md:w-[470px] h-[60px] md:h-[109px] text-xl md:text-3xl rounded-[40px]"
        >
          Регистрация
        </button>
      </div>
    </div>

    
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
const modalRef = ref(null)
</script>

<style scoped>
 
</style>
