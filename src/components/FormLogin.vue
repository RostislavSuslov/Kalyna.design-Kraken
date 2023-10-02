<template>
  <form @submit.prevent="onSubmit" >
    <custom-input name="login" v-model="form.login"></custom-input>
    <custom-input type="password" name="password" v-model="form.password"></custom-input>
    <custom-input type="password" name="password" :modelValue="form.password" @update:modelValue="form.password = $event"></custom-input>
    <button>Submit</button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import CustomInput from "@/components/CustomInput.vue";

const form = ref({
  login: "Rost",
  password: ""
});
const onSubmit =()=> {
  console.log(form.value)
}

</script>
<style scoped>

</style>