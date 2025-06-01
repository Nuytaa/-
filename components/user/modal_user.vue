<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="flex flex-col md:flex-row bg-white rounded-[40px] w-[95%] max-w-[1200px] overflow-hidden">
        <!-- Левая часть -->
        <div class="md:w-1/2 flex flex-col items-center justify-center p-8 bg-white text-center">
          <img src="/logo.png" alt="Логотип" class="w-20 h-20 mb-6" />
          <h2 class="text-xl font-bold mb-2">Начните воплощать<br /> свою идею</h2>
          <p class="text-sm">В скором времени по вашему запросу свяжутся</p>
        </div>

        <!-- Правая часть -->
        <div class="md:w-1/2 p-8 bg-white relative]">
          <button @click="close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold">×</button>
          <h3 class="text-2xl font-bold mb-6">Создание проекта</h3>

          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block mb-1 text-sm font-semibold">ФИО*</label>
              <input type="text" placeholder="ФИО" class="w-full px-4 py-2 border border-gray-300 rounded-full" />
            </div>
            <div>
              <label class="block mb-1 text-sm font-semibold">Контактные данные*</label>
              <input type="text" placeholder="Номер телефона/ E-mail" class="w-full px-4 py-2 border border-gray-300 rounded-full" />
            </div>
            <div>
              <label class="block mb-1 text-sm font-semibold">Тип задач*</label>
              <select class="w-full px-4 py-2 border border-gray-300 rounded-full">
                <option>Лендинг</option>
                <option>Интернет-магазин</option>
                <option>Другое</option>
              </select>
            </div>
            <div>
              <label class="block mb-1 text-sm font-semibold">Сроки проекта</label>
              <input type="date" class="w-full px-4 py-2 border border-gray-300 rounded-full" />
            </div>
             <button
                type="button"
                @click="goToBidPage"
                class="w-full bg-[#0BC1BF] text-white font-semibold py-2 rounded-full hover:bg-cyan-600"
              >
                Создать проект
              </button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['close'])

function close() {
  emit('close')
}

function submitForm() {
  alert('Проект отправлен!')
  close()
}

// Перенаправление на страницу с заявкой

const router = useRouter()

function goToBidPage() {
  router.push('/user/bid')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>