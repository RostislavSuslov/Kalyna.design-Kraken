<script setup>
 import LoginForm from "@/components/provide/LoginForm.vue";
// import PrepareForm from "@/components/validate/PrepareForm.vue";
// import RegisterForm from "@/components/validate/RegisterForm.vue";
// import RolesForm from "@/components/validate/RolesForm.vue";
// import DynamicComponent from "@/components/DynamicComponent.vue";
import RolesFormNew from "@/components/RolesFormNew.vue";
import {FireIcon} from '@heroicons/vue/20/solid'
import PrepareButton from "@/components/validate/PrepareButton.vue";

import { ref } from 'vue';
import CustomModal from "@/components/CustomModal.vue";

</script>
<template>
  <roles-form-new />

  <div id="test"></div>
</template>
<style lang="scss">
  @import './assets/css/style.scss';


</style>
