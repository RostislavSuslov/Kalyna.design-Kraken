<template>
  <div>
    <div class="grid grid-cols-2 gap-6 p-12" @click="changeBackgroundColor">
      <template v-for="(colorObject, index) in arrColors">
        <button v-for="(color, key) in colorObject"
            :key="index + key + color"
            :style="{ backgroundColor: color }"
        >
          {{ key }} : {{ color }}
        </button>
      </template>
    </div>
  </div>
</template>

<script setup>
// Принимаем массив объектов через props
const { arrColors } = defineProps(['arrColors']);

const changeBackgroundColor = (event) => {
  if (event.target.tagName === 'BUTTON') {
    const ulElement = event.currentTarget;
    const liElement = event.target;

    ulElement.style.backgroundColor = liElement.style.backgroundColor;
  }
};
</script>

<style scoped>

</style>
