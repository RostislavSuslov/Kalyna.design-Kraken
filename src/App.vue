<template>
  <div class="container ">
    <login-form></login-form>
  </div>
</template>

<script setup>
import LoginForm from "@/components/provide/LoginForm.vue";
import {ref} from "vue";

const input = ref('')
</script>