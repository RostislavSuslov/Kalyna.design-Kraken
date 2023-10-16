<script setup>
import LoginForm from "@/components/provide/LoginForm.vue";
import PrepareForm from "@/components/validate/PrepareForm.vue";
import RegisterForm from "@/components/validate/RegisterForm.vue";
import RolesForm from "@/components/validate/RolesForm.vue";
</script>
<template>
  <div class="container ">
    <roles-form />
    <!--    <register-form />-->
    <prepare-form />
    <!--    <login-form />-->
  </div>
</template>
<style lang="scss">
  @import './assets/css/style.scss';
</style>
