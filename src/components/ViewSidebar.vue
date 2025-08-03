<template>
  <div class="h-[100vh] p-[1rem] text-[#262626] flex items-center justify-center">
    <div class="text-center bg-white rounded-lg shadow-lg p-8 max-w-md">
      <h2 class="text-2xl font-bold text-[#3cb1f4] mb-4">Vista {{ id }}</h2>
      <p class="text-gray-600">Esta es la vista número {{ id }}.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { id } = defineProps<{ id: string }>()
</script>

<style scoped></style>
