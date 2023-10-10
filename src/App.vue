<script setup>
import LoginForm from "@/components/provide/LoginForm.vue";
import PrepareForm from "@/components/validate/PrepareForm.vue";
import {ref} from "vue";

const input = ref('')
</script>
<template>
  <div class="container ">
    <prepare-form></prepare-form>
  </div>
</template>

