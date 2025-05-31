<template>
  <div class="mb-4 text-left w-full max-w-[403px]">
    <label class="text-sm font-bold text-black mb-1 block">{{ label }}</label>
    <input
      type="text"
      :placeholder="placeholder"
      class="rounded-full border px-4 py-2 text-[#858585] w-full h-[56px] text-[16px]"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder: String
})
</script>