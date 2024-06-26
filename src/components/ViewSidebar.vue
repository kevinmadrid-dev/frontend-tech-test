<template>
  <div class="h-[100vh] p-[1rem] text-[#262626]">
    <p>Hola, esta es la Vista {{ id }}</p>
  </div>
</template>

<script lang="ts" setup>
const { id } = defineProps<{ id: string }>()
</script>

<style scoped></style>
