<template>
  <div :class="['rounded-[40px] p-6 min-h-[600px] w-full flex flex-col justify-between', bg]">
    <h3 class="text-2xl font-bold">{{ title }}</h3>
    <div class="flex flex-wrap gap-2">
      <span class="tech-tag">Html</span>
      <span class="tech-tag">Scss</span>
      <span class="tech-tag">Js</span>
      <span class="tech-tag">Go</span>
      <span class="tech-tag">MySQL</span>
      <span class="tech-tag">Flask</span>
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Keras</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  bg: String
})
</script>

<style scoped>
.tech-tag {
  @apply bg-gray-800 text-white text-sm px-3 py-1 rounded-full;
}
</style>