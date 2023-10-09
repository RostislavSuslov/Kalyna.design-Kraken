<script setup>
  import { provide } from 'vue';
  import arrCities from "@/composables/cities.js"
  import {Form, Field} from 'vee-validate';
  // const input = ref('')
  // const inputError = computed(()=>{
  //     return input.value.trim().length ? '' : 'Input is required'
  // })
  //
  // const helperText = computed(()=>{
  //   return "A smile always expresses positive emotions: happiness, joy, fun. Smile at someone and they'll smile back :)"
  // });

  provide('cities', arrCities);

</script>

<template>
   <div id="root" class="container ">

     <Form @submit="sendForm" class="flex flex-col items-center border p-12">
       <h3 class="text-4xl mb-8">Login form</h3>
       <Field type="text"></Field>
       <button class="inline-flex items-center justify-center font-bold border shadow-xl rounded cursor-pointer min-h-[42px] py-4 px-12 bg-purple-500 text-white hover:bg-purple-700 mx-auto my-3 min-w-[400px]">Submit</button>
     </Form>

   </div>
</template>

<style lang="scss">
  @import './assets/css/style.scss';
</style>
