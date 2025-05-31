 <template>
    <header class="w-full max-w-[1920px] px-4 py-4">
      <nav class="flex justify-between items-center rounded-[40px] p-4 relative">
        <!-- Лого -->
        <div class="text-3xl md:text-3xl font-black text-black w-40 h-20 flex items-center justify-center rounded-[40px] border border-primary">
          iTeam
        </div>

        <!-- Десктоп меню -->
        <ul class="md:flex space-x-20 text-black text-3xl w-[1317px] h-[82px] flex items-center justify-center rounded-[40px] font-normal border-1 border-primary">
          <li><a href="#about" class="hover:text-[#0BC1BF]">О нас</a></li>
          <li><a href="#" class="hover:text-black">Команды</a></li>
          <li class="font-black">Хочу проект</li>
          <li><a href="#projects" class="hover:text-black">Проекты</a></li>
          <li><a href="#" class="hover:text-black">Контакты</a></li>
        </ul>

        <!-- Десктоп  -->
        <div class="md:flex space-x-8 text-black text-3xl w-[313px] h-[82px] flex items-center justify-center rounded-[40px] font-normal border-1 border-primary">
          <button @click="modalRef.show = true" class="hover:text-[#0BC1BF]">Вход \ Регистрация</button>
          <Modal ref="modalRef" />
        </div>

        <!-- Бургер меню -->
        <button @click="toggleMenu" class="md:hidden text-3xl">
          <span v-if="!menuOpen">&#9776;</span>
          <span v-else>&times;</span>
        </button>

        <!-- Мобильная менюшка -->
        <div v-if="menuOpen" class="absolute top-full left-0  bg-[#D9D9D9] w-[1317px] h-[82px] shadow-md md:hidden z-50 font-normal">
          <ul class="flex flex-col text-black p-4 space-y-4 font-normal">
            <li><a href="#about" class="hover:text-black">О нас</a></li>
            <li><a href="#" class="hover:text-black">Команды</a></li>
            <li><a href="#" class="hover:text-black">Проекты</a></li>
            <li><a href="#" class="hover:text-black">Контакты</a></li>
            <li><a href="#" class="hover:text-black">Вход / Регистрация</a></li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
const modalRef = ref(null)
const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>