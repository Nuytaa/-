<template>
  <div class="mb-4 text-left w-full max-w-[403px] relative">
    <label class="text-sm font-bold text-black mb-1 block">{{ label }}</label>
    <input
      :type="show ? 'text' : 'password'"
      :placeholder="label"
      class="rounded-full border px-4 py-2 pr-10 text-[#858585] w-full h-[56px] text-[16px]"
    />
    <button @click="show = !show" type="button" class="absolute right-3 top-[38px]">
      👁
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ label: String })
const show = ref(false)
</script>