<script setup>
 import LoginForm from "@/components/provide/LoginForm.vue";
// import PrepareForm from "@/components/validate/PrepareForm.vue";
// import RegisterForm from "@/components/validate/RegisterForm.vue";
// import RolesForm from "@/components/validate/RolesForm.vue";
// import DynamicComponent from "@/components/DynamicComponent.vue";
import RolesFormNew from "@/components/validate/RolesFormNew.vue";
import {FireIcon} from '@heroicons/vue/20/solid'
import PrepareButton from "@/components/validate/PrepareButton.vue";

import { ref } from 'vue';
import CustomModal from "@/components/CustomModal.vue";
 import TextField from "@/components/validate/TextField.vue";



const myInput = ref("")

 const onInput = (val) => {
   myInput.value = val
 }

const onSuccess = () => {
  alert('onSuccess')
}

const onError = () => {
  alert('onError')
}



</script>
<template>
  <input type="text" v-model="myInput"  class="border border-gray-600">
<!--  <text-field v-model="myInput"></text-field>-->
  <roles-form-new @success="onSuccess" @error="onError" v-model="myInput"/>
<!--  :myInput="myInput" @input="onInput"-->
<!--  v-model:myInput="myInput"-->
</template>
<style lang="scss">
  @import './assets/css/style.scss';
</style>
<!--1. function randomn()-->
<!--2. event success -->
<!--3. Heandler (перехоплювач) -->
<!--4. умова для виклику івентів  -->