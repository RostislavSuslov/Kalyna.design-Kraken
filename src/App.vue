<script setup>
import { provide, reactive } from 'vue';
import arrCities from "@/composables/cities.js";
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import FormLogin from "@/components/FormLogin.vue";
// const input = ref('')
// const inputError = computed(()=>{
//     return input.value.trim().length ? '' : 'Input is required'
// })
//
// const helperText = computed(()=>{
//   return "A smile always expresses positive emotions: happiness, joy, fun. Smile at someone and they'll smile back :)"
// });
//provide('cities', arrCities);

// const state = reactive({
//   firstName: 'Rost',
//   lastName: '',
//   contact: {
//     email: ''
//   }
// });
//
// const rules = {
//   firstName: { required }, // Matches state.firstName
//   lastName: { required }, // Matches state.lastName
//   contact: {
//     email: { required, email } // Matches state.contact.email
//   }
// };
//
// const v$ = useVuelidate(rules, state);
</script>


<template>
   <div id="root" class="container ">
     <FormLogin/>
<!--     <form @submit="sendForm" name="field" class="flex flex-col items-center border p-12">-->
<!--       <h3 class="text-4xl mb-8">Login form</h3>-->
<!--       <label for="name"></label>-->
<!--       <input id="name" class="border p-5 w-full" placeholder="write name"/>-->
<!--       <button class="inline-flex items-center justify-center font-bold border shadow-xl rounded cursor-pointer min-h-[42px] py-4 px-12 bg-purple-500 text-white hover:bg-purple-700 mx-auto my-3 min-w-[400px]">Submit</button>-->
<!--     </form>-->
<!--     <form :class="{ error: v$.firstName.$errors.length }">-->
<!--       <input v-model="state.firstName" class="border p-5 w-full" placeholder="write name"/>-->
<!--       <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">-->
<!--         <div class="error-msg">{{ error.$message }}</div>-->
<!--       </div>-->
<!--       <button>submit</button>-->
<!--     </form>-->
   </div>
</template>

<style lang="scss">
  @import './assets/css/style.scss';
</style>
