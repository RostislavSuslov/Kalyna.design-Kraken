<script setup>
import SecondInput from "@/components/SecondInput.vue";
import {ref} from "vue";
const msg = ref('Write "toggler"');

</script>

<template>
   <div id="root">
     <div class="theme-togler flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]">
       <h3 class="block w-full text-3xl mb-8">{{msg}}</h3>
       <input class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] mb-6 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          v-model="msg"
       />

       <SecondInput></SecondInput>
     </div>
   </div>
</template>

<style lang="scss">
@import './assets/css/style.scss';

</style>
