<script setup>
import {ref, provide} from "vue";
import CustomInput from "@/components/provide/CustomInput.vue";

const form = ref({
  login: "Rost",
  email: "",
  tel: "",
  password: "",
});
const onSubmit =()=> {
  console.log(form.value)
}

provide("formData", form)
</script>
<template>
  <form @submit.prevent="onSubmit" >
    <pre>{{form}}</pre>
    <custom-input name="login" v-model="form.login"></custom-input>
    <custom-input name="email" type="email"></custom-input>
    <custom-input name="tel" type="tel"></custom-input>

    <custom-input type="password" name="password" v-model="form.password"></custom-input>
    <custom-input type="password" name="password" :modelValue="form.password" @update:modelValue="form.password = $event"></custom-input>

    <button>Submit</button>
  </form>
</template>


<style scoped></style>