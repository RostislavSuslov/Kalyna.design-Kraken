<template>
    <div>
      <div class="show">
        <img :src="curentImg" alt="city">
      </div>
      <div class="grid grid-cols-2 p-8 border" @click="changeBackgroundColor">
        <div v-for="(city) in colorsImgArr" :key="city.id">

            <button @click="curentImg = city.src" class=" inline-block py-3 px-6 m-2 rounded-[5px] border" >
              {{city?.name}}
            </button>

        </div>
      </div>
    </div>

</template>

<script setup>
// Принимаем массив объектов через props
import {inject, ref} from "vue";


const colorsImgArr = inject('cities')
const curentImg = ref(null);
const changeBackgroundColor = (event) => {
  if (event.target.tagName === 'BUTTON') {
    const wrapper = event.currentTarget;
    const button = event.target;

    wrapper.style.backgroundColor = button.style.backgroundColor;
  }
};
</script>

<style scoped>

</style>