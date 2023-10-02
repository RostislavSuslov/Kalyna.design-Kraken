<template>
  <div>
    <ul class="grid grid-cols-2 gap-6 p-12" @click="changeBackgroundColor">
      <li
          v-for="(colorObject, index) in arrColors"
          :key="index"
          :style="{ backgroundColor: Object.values(colorObject)[0] }"
      >
        {{ Object.keys(colorObject)[0] }}: {{ Object.values(colorObject)[0] }}
      </li>
    </ul>
  </div>
</template>

<script setup>
// Принимаем массив объектов через props
const { arrColors } = defineProps(['arrColors']);

const changeBackgroundColor = (event) => {
  if (event.target.tagName === 'LI') {
    const ulElement = event.currentTarget;
    const liElement = event.target;

    ulElement.style.backgroundColor = liElement.style.backgroundColor;
  }
};
</script>

<style scoped>

</style>
