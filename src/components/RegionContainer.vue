<template>
    <div class="grid grid-cols-[400px,1fr] grid-rows-[auto,1fr] gap-12 p-12 my-24  bg-white rounded-lg shadow-lg">
      <div class="show h-[400px] row-span-2 p-4">
        <img :src="curentImg" class="max-w-full max-h-[360px] h-auto mx-auto" alt="city">
      </div>
      <div class="flex row-span-1">
        <div v-for="(city) in imgArr" :key="city.id">
            <button
                @click="curentImg = city.src, curentTitle = city.name, curentDescription = city.description"
                class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 shadow-xl rounded mr-2"
            >
                {{city?.name}}
            </button>
        </div>
      </div>
      <div class="descriptions max-h-[275px] overflow-y-auto row-span-2">
        <h2 class="text-[24px]">{{curentTitle}}</h2>
        <p>{{curentDescription}}</p>
      </div>
    </div>
</template> 

<script setup>
import {inject, ref} from "vue";

const imgArr = inject('cities')
const curentImg = ref(null);
const curentTitle = ref(null);
const curentDescription = ref(null);


</script>

<style scoped>
</style>